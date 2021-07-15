import {Router} from 'express';
import { getCards, removeCard } from './cardsControl';

const {authMiddleware} = require('../middleware/authMiddleware');

const cardsRouter = Router();

cardsRouter.get('/', getCards);
cardsRouter.delete('/', authMiddleware, removeCard);

export default cardsRouter;
