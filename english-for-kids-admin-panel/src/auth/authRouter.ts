import {Router} from 'express';
import {login, logout} from './authControl';
import { AuthRouterPath } from '../shared/globalVariables';

const authRouter = Router();

authRouter.post(AuthRouterPath.LOGIN, login);
authRouter.delete(AuthRouterPath.LOGOUT, logout);

export default authRouter;
