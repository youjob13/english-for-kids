import {Router} from 'express';
import { updateCategory, removeCategory, createCategory } from './categoryControl';
import { RouterPath } from '../shared/globalVariables';

const { authMiddleware } = require('../middleware/auth');

const categoryRouter = Router();

categoryRouter.put(RouterPath.ROOT, authMiddleware, updateCategory);
categoryRouter.delete(RouterPath.ROOT, authMiddleware, removeCategory);
categoryRouter.post(RouterPath.ROOT, authMiddleware, createCategory);

export default categoryRouter;
