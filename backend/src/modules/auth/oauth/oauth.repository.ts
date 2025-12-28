import * as bcrypt from 'bcryptjs';
import * as oauth2 from 'oauth2-server'; 
import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';
import prisma from '../../../config/prisma.client'; 

const PRIVATE_KEY = fs.readFileSync('./local_private.key', 'utf8');
const PUBLIC_KEY = fs.readFileSync('./local_public.key', 'utf8');

const ACCESS_TOKEN_LIFETIME_SECONDS = 3600; // 1 hour
const REFRESH_TOKEN_LIFETIME_SECONDS = 60 * 60 * 24 * 7; // 1 week

const calculateExpirationTime = (lifetimeSeconds: number): Date => {
  const expiration = new Date();
  expiration.setTime(expiration.getTime() + (lifetimeSeconds * 1000));
  return expiration;
};

const model: any = { 

  getUser: async (username, password, client) => {
    const email = username; 
    
    const user = await prisma.user.findUnique({
        where: { email },
        select: { id: true, email: true, password: true }, 
    });

    if (!user) return null;

    const match = await bcrypt.compare(password, user.password);

    if (match) {
        return { id: user.id } as oauth2.User; 
    }
    return null;
  },

  getClient: async (clientId, clientSecret) => {
    const client = await prisma.oAuthClient.findUnique({
      where: { clientId: clientId },
    });
    if (!client) return null;

    if (!clientSecret || client.clientSecret === clientSecret) {
      console.log(`[Client Debug] Client found: ${client.clientId}`);
      return {
        id: client.clientId,
        grants: client.grants,
        redirectUris: client.redirectUris,
        user: client.userId ? { id: client.userId } : undefined,
      } as oauth2.Client; 
    }
    return null;
  },

  generateAccessToken: async (client, user, scope) => {
    const expiresInSeconds = 60 * 60; 
    const expirationDate = new Date(Date.now() + expiresInSeconds * 1000);

    const payload = {
      sub: user ? user.id.toString() : null,
      aud: client.id,
      iss: 'HG_Unified_API',
      scopes: scope || [],
    };

    const accessToken = jwt.sign(payload, PRIVATE_KEY, {
      algorithm: 'RS256',
      expiresIn: expiresInSeconds,
    });

    return {
      accessToken: accessToken,
      accessTokenExpiresAt: expirationDate,
      scope: scope,
    };
  },


  saveAuthorizationCode: async (code, client, user) => {
    if (!user || !user.id || isNaN(Number(user.id))) {
        return null;
    }

    const clientDb = await prisma.oAuthClient.findUnique({ 
        where: { clientId: client.id } 
    });
    
    if (!clientDb) {
        return null; 
    }

    try {
        const savedCode = await prisma.oAuthAuthorizationCode.create({
          data: {
            code: code.authorizationCode,
            expiresAt: code.expiresAt,
            scope: code.scope,
            redirectUri: code.redirectUri,
            clientId: clientDb.id, 
            userId: Number(user.id), 
          },
        });
        
        // Log successful save
        console.log(`[Save Debug] Code successfully SAVED: ${savedCode.code}`);

        return {
          authorizationCode: savedCode.code,
          expiresAt: savedCode.expiresAt,
          scope: code.scope,
          redirectUri: code.redirectUri,
          client: client,
          user: user,
        } as oauth2.AuthorizationCode;
        
    } catch (e) {
        console.error(`[SAVE FAILED] Authorization Code DB Write Failed. Full Error Details:`, e);
        return null; 
    }
  },

  getAuthorizationCode: async (authorizationCode) => {
    console.log(`[Retrieve Debug] Attempting to retrieve code: ${authorizationCode}`);
    
    const code = await prisma.oAuthAuthorizationCode.findUnique({
      where: { code: authorizationCode },
      include: { client: true, user: true }, 
    });

    if (!code) {
        console.error(`[Retrieve Error] Authorization code ${authorizationCode} NOT FOUND in database.`);
        return null;
    }
    
    // Check for Expiration (Critical part of the Invalid Grant error)
    if (code.expiresAt < new Date()) {
        console.error(`[Retrieve Error] Authorization code ${authorizationCode} HAS EXPIRED.`);
        await prisma.oAuthAuthorizationCode.delete({ where: { id: code.id } });
        return null;
    }
    
    return {
      authorizationCode: code.code,
      expiresAt: code.expiresAt,
      scope: code.scope,
      
      // Map the related client data - MUST use client.clientId for 'id'
      client: {
        id: code.client.clientId, 
        grants: code.client.grants,
        redirectUris: code.client.redirectUris,
      } as oauth2.Client,
      
      redirectUri: code.redirectUri,
      
      // Map the related user data - MUST use the simple { id: number } object
      user: { id: code.user.id }, 
    } as oauth2.AuthorizationCode;
  },


  // This method is called after a successful token exchange to immediately invalidate the code.
  revokeAuthorizationCode: async (code) => {
    const result = await prisma.oAuthAuthorizationCode.deleteMany({
      where: { code: code.authorizationCode },
    });
    
    // Return true if any records were deleted
    return result.count > 0;
  },
  
  saveToken: async (token, client, user) => {
    const clientDb = await prisma.oAuthClient.findUnique({ where: { clientId: client.id } });
    if (!clientDb) return null;

    const userId = user ? Number(user.id) : null;
    if (token.refreshToken && userId) {
      await prisma.oAuthRefreshToken.create({
        data: {
          refreshToken: token.refreshToken,
          expiresAt: calculateExpirationTime(REFRESH_TOKEN_LIFETIME_SECONDS),
          scope: token.scope,
          clientId: clientDb.id,
          userId: userId,
        }
      });
    }
    
    return {
      accessToken: token.accessToken,
      accessTokenExpiresAt: token.accessTokenExpiresAt, 
      refreshToken: token.refreshToken,
      refreshTokenExpiresAt: token.refreshTokenExpiresAt,
      scope: token.scope,
      client: client,
      user: user,
    } as oauth2.Token;
  },
  
  getAccessToken: async (accessToken) => {
    try {
      const decoded = jwt.verify(accessToken, PUBLIC_KEY, {
        algorithms: ['RS256'],
        ignoreExpiration: false,
      }) as any;

      const client = await prisma.oAuthClient.findUnique({ where: { clientId: decoded.aud } });
      
      if (!client) return null;

      return {
        accessToken: accessToken,
        accessTokenExpiresAt: new Date(decoded.exp * 1000), 
        scope: decoded.scopes,
        client: { id: client.clientId } as oauth2.Client,
        user: { id: Number(decoded.sub) } as oauth2.User,
      } as oauth2.Token;

    } catch (err) {
      return null;
    }
  },

  getRefreshToken: async (refreshToken) => {
    const token = await prisma.oAuthRefreshToken.findUnique({
      where: { refreshToken },
      include: { client: true, user: true },
    });
    if (!token || token.expiresAt < new Date()) return null;

    return {
      refreshToken: token.refreshToken,
      refreshTokenExpiresAt: token.expiresAt,
      scope: token.scope,
      client: { id: token.client.clientId } as oauth2.Client,
      user: { id: token.user.id } as oauth2.User,
    } as oauth2.RefreshToken;
  },

  revokeToken: async (token) => {
    const result = await prisma.oAuthRefreshToken.deleteMany({ where: { refreshToken: token.refreshToken } });
    return result.count > 0;
  },
  
  verifyScope: async (scope, token) => { 
      return true; 
  },
};

export default model;