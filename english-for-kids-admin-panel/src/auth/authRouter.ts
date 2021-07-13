import {Router} from 'express';
import {getUsers, login} from './authControl';

const { authMiddleware } = require('../middleware/authMiddleware');

const router = Router();

router.post('/login', login);
router.get('/users', authMiddleware, getUsers);

export default router;
