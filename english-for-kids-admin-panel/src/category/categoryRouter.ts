import {Router} from 'express';
import updateCategory from './categoryControl';

const { authMiddleware } = require('../middleware/authMiddleware');

const categoryRouter = Router();

categoryRouter.put('/', authMiddleware, updateCategory);

export default categoryRouter;
