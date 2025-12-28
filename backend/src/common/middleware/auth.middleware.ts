import { Request, Response, NextFunction } from 'express';
import { expressjwt as expressjwt } from 'express-jwt';
import HttpException from '../errors/http_exception';
import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'superSecret';

const getTokenFromHeaders = (req: Request): string | null => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return null;

  const [scheme, token] = authHeader.split(' ');
  if (['Token', 'Bearer'].includes(scheme) && token) {
    return token;
  }
  return null;
};

export const sharedAuth = (oauthService: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const accessToken = getTokenFromHeaders(req);

    if (!accessToken) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    try {
      const tokenObject = await oauthService.getAccessToken(accessToken);

      if (tokenObject && new Date(tokenObject.accessTokenExpiresAt) > new Date()) {
        (req as any).user = tokenObject.user;
        return next();
      }
    } catch (e) {
      console.warn(`[SharedAuth] OAuth check failed, falling back to JWT`);
    }

    try {
      const secret = process.env.JWT_SECRET || 'secret';
      const decoded = jwt.verify(accessToken, secret) as any;
      (req as any).user = decoded;
      next();
    } catch (jwtErr) {
      next(new HttpException(401, 'Invalid or expired token'));
    }
  };
};

export const authMiddleware = {
  required: expressjwt({
    secret,
    getToken: getTokenFromHeaders,
    algorithms: ['HS256'],
  }),
  optional: expressjwt({
    secret,
    credentialsRequired: false,
    getToken: getTokenFromHeaders,
    algorithms: ['HS256'],
  }),
};