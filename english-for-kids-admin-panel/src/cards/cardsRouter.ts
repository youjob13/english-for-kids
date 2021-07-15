import {Router} from 'express';
import multer from 'multer';
import { getCards, removeCard, updateCard } from './cardsControl';

const {authMiddleware} = require('../middleware/authMiddleware');

const upload = multer({dest: 'public/'});

const cardsRouter = Router();

cardsRouter.get('/', getCards);
cardsRouter.delete('/', authMiddleware, removeCard);
cardsRouter.put('/', upload.any(), updateCard);

export default cardsRouter;
