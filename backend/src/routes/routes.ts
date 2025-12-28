import { Router } from 'express';

import authController from '../modules/auth/auth.controller';
import userController from '../modules/user/user.controller';

const api = Router()
  .use(authController)
  .use('/users', userController);
export default api;