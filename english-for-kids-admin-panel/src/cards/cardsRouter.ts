import { Router } from 'express';
import paginate from 'express-paginate';
import {
  createCard, getCards, removeCard, updateCard,
} from './cardsControl';

const {uploadFilesMiddleware} = require('../middleware/uploadFiles');
const {authMiddleware} = require('../middleware/auth');

const cardsRouter = Router();

cardsRouter.get('/', paginate.middleware(4, 20), getCards);
cardsRouter.delete('/', authMiddleware, removeCard);
cardsRouter.put('/', authMiddleware, uploadFilesMiddleware.any(), updateCard);
cardsRouter.post('/', authMiddleware, uploadFilesMiddleware.any(), createCard);

export default cardsRouter;
