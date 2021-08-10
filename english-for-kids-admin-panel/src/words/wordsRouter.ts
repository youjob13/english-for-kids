import { Router } from 'express';
import paginate from 'express-paginate';
import {
  createWord, getWords, removeWord, updateWord,
} from './wordsControl';
import { RouterPath } from '../shared/globalVariables';

const {uploadFilesMiddleware} = require('../middleware/uploadFiles');
const {authMiddleware} = require('../middleware/auth');

const wordsRouter = Router();

wordsRouter.get(RouterPath.ROOT, paginate.middleware(4, 20), getWords);
wordsRouter.delete(RouterPath.ROOT, authMiddleware, removeWord);
wordsRouter.put(RouterPath.ROOT, authMiddleware, uploadFilesMiddleware.any(), updateWord);
wordsRouter.post(RouterPath.ROOT, authMiddleware, uploadFilesMiddleware.any(), createWord);

export default wordsRouter;
