import {Router} from 'express';
import {login, logout} from './authControl';

const authRouter = Router();

authRouter.post('/login', login);
authRouter.delete('/logout', logout);

export default authRouter;
