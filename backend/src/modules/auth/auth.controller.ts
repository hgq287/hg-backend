import { NextFunction, Request, Response, Router } from 'express';

import OAuthServer from 'express-oauth-server';
import oauthModel from './oauth/oauth.repository';
import { authMiddleware } from '../../common/middleware/auth.middleware';
import { sharedAuth } from '../../common/middleware/auth.middleware';
import { createUser } from './auth.service';

const router = Router();

const oauth = new OAuthServer({
  model: oauthModel,
  grants: ['authorization_code', 'refresh_token', 'client_credentials', 'password'],
  accessTokenLifetime: 60 * 60, 
  refreshTokenLifetime: 60 * 60 * 24 * 7, 
});


const authGuard = sharedAuth(oauthModel);

const ACCESS_TOKEN_LIFETIME_SECONDS = 3600; 
const REFRESH_TOKEN_LIFETIME_SECONDS = 60 * 60 * 24 * 7; 

const getClientCredentials = (req: Request): { clientId: string, clientSecret: string } | null => {
  const header = req.headers.authorization;
  if (header && header.startsWith('Basic ')) {
    try {
      const encoded = header.substring(6).trim();
      const decoded = Buffer.from(encoded, 'base64').toString('utf8');
      const [clientId, clientSecret] = decoded.split(':');
      if (clientId && clientSecret) {
        return { clientId, clientSecret };
      }
    } catch (e) {
        console.error('Error parsing Basic Auth header:', e);
    }
  }
  return null;
};

const jsonToFormUrlencoded = (req: any, res: any, next: any) => {
  if (req.is('application/json') && req.body && req.body.grant_type === 'password') {
    const { grant_type, email, password } = req.body; 
    req.body = {
      grant_type: grant_type,
      email: email,
      password: password
    };
    
    req.headers['content-type'] = 'application/x-www-form-urlencoded';
    console.log(req.headers);
  }
  next();
};

/**
 * @route {GET} /oauth/authorize
 */
router.get('/oauth/authorize', authMiddleware.optional, async (req: Request, res: Response, next: NextFunction) => {
  
  // Ensure the ID is explicitly converted to a number.
  const authenticatedUserId = 1;
  (req as any).oauth = { user: { id: Number(authenticatedUserId) } }; 
  
  return oauth.authorize({
    authenticateHandler: {
      handle: (request: any, response: any) => {
        return (request as any).oauth.user;
      },
    },
    allowEmptyScope: true,
  })(req, res, next);

});


/**
 * @route {POST} /oauth/token
 * Purpose: Exchanges the authorization code or refresh token for a new access token.
 */
router.post('/oauth/token', oauth.token());


/**
 * Sign Up
 * @route {POST} /signup
 */
router.post('/signup', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const payload = req.body;
    const user = await createUser({ ...payload, demo: false });
    res.status(201).json({ user });
  } catch (error) {
    next(error);
  }
});

/**
 * Sign In
 * @route {POST} /signin
 */
router.post('/signin', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password, grant_type } = req.body;
    let clientCredentials = getClientCredentials(req);

    if (grant_type !== 'password' || !username || !password) {
      return res.status(400).json({ error: 'invalid_request', error_description: 'Missing required parameters: grant_type=password, username, password.' });
    }
    if (!clientCredentials) {
      if (!req.body.client_id || !req.body.client_secret) {
        return res.status(401).json({ error: 'invalid_client', error_description: 'Client credentials required in Basic Auth header.' });
      }

      clientCredentials = { 
        clientId: req.body.client_id, 
        clientSecret: req.body.client_secret 
      };
    }

    const client = await oauthModel.getClient(clientCredentials.clientId, clientCredentials.clientSecret);
    if (!client) {
      return res.status(401).json({ error: 'invalid_client', error_description: 'Invalid client credentials.' });
    }
        
    const user = await oauthModel.getUser(username, password, client);
    if (!user) {
      return res.status(400).json({ error: 'invalid_grant', error_description: 'Invalid username or password.' });
    }
        
    const accessTokenObj = await oauthModel.generateAccessToken(client, user, 'read');
    const refreshTokenValue = require('crypto').randomBytes(32).toString('hex');
    const refreshTokenObj = {
      refreshToken: refreshTokenValue,
      refreshTokenExpiresAt: new Date(Date.now() + REFRESH_TOKEN_LIFETIME_SECONDS * 1000),
      scope: 'read',
    };

    await oauthModel.saveToken({
      ...accessTokenObj,
      ...refreshTokenObj,
    }, client, user);

    res.status(200).json({
      access_token: accessTokenObj.accessToken,
      token_type: 'Bearer',
      expires_in: ACCESS_TOKEN_LIFETIME_SECONDS,
      refresh_token: refreshTokenObj.refreshToken,
      scope: accessTokenObj.scope,
    });

  } catch (error) {
    console.error('Error during manual signin grant:', error);
    return res.status(500).json({ error: 'server_error', error_description: 'Internal error during token issuance.' });
  }
});

export default router;