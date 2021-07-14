import {Router} from 'express';
import getCards from './cardsControl';

// const { authMiddleware } = require('../middleware/authMiddleware');

const cardsRouter = Router();

cardsRouter.get('/', getCards);

export default cardsRouter;
