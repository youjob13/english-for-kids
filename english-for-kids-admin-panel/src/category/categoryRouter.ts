import {Router} from 'express';
import { updateCategory, removeCategory, createCategory } from './categoryControl';

const { authMiddleware } = require('../middleware/authMiddleware');

const categoryRouter = Router();

categoryRouter.put('/', authMiddleware, updateCategory);
categoryRouter.delete('/', authMiddleware, removeCategory);
categoryRouter.post('/', authMiddleware, createCategory);

export default categoryRouter;
