import { Router } from 'express';
import {
  createCard, getCards, removeCard, updateCard,
} from './cardsControl';

const {uploadFilesMiddleware} = require('../middleware/uploadFiles');
const {authMiddleware} = require('../middleware/auth');

const cardsRouter = Router();

cardsRouter.get('/', getCards);
cardsRouter.delete('/', authMiddleware, removeCard);
cardsRouter.put('/', authMiddleware, uploadFilesMiddleware.any(), updateCard);
cardsRouter.post('/', authMiddleware, uploadFilesMiddleware.any(), createCard);

export default cardsRouter;
