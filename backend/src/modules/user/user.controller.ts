import { Router, Request, Response, NextFunction } from 'express';
import oauthModel from '../auth/oauth/oauth.repository';
import { sharedAuth } from '../../common/middleware/auth.middleware';
import * as userService from './user.service';
import { updateUserProfile } from './user.service';

const router = Router();

const authGuard = sharedAuth(oauthModel);

/**
 * @route {GET} /me
 * @auth required (via Shared Middleware)
 */
router.get('/me', authGuard, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user.id; 

    if (!userId) {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
    }
    
    const profile = await userService.getUserProfile(userId);
    
    return res.status(200).json(profile);
  } catch (error) {
    next(error); 
  }
});

/**
 * @route {PUT} /me
 * @auth required (via Shared Middleware)
 */
router.put('/me', authGuard, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = (req as any).authenticatedUserId; 
    
    if (!userId) {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    const user = await updateUserProfile(userId, req.body);
    res.json({ user });
  } catch (error) {
    next(error);
  }
});

export default router;

