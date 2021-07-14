import {Router} from 'express';
import { updateCategory, removeCategory } from './categoryControl';

const { authMiddleware } = require('../middleware/authMiddleware');

const categoryRouter = Router();

categoryRouter.put('/', authMiddleware, updateCategory);
categoryRouter.delete('/', authMiddleware, removeCategory);

export default categoryRouter;
