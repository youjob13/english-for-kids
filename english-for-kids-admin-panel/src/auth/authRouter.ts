import {Router} from 'express';
import {getUsers, login, logout} from './authControl';

const { authMiddleware } = require('../middleware/authMiddleware');

const router = Router();

router.post('/login', login);
router.delete('/logout', logout);
router.get('/users', authMiddleware, getUsers);

export default router;
