import {Router} from 'express';
import login, {getUsers} from './authControl';
import config from '../config';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const jwt = require('jsonwebtoken');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const authMiddleware = require('../middleware/authMiddleware');

const router = Router();

router.post('/login', login);

router.get('/users', authMiddleware, getUsers);

export default router;
