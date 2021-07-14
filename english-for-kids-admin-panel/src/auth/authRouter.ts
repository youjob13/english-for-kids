import {Router} from 'express';
import {getUsers, login, logout} from './authControl';

const { authMiddleware } = require('../middleware/authMiddleware');

const authRouter = Router();

authRouter.post('/login', login);
authRouter.delete('/logout', logout);
authRouter.get('/users', authMiddleware, getUsers);

export default authRouter;
