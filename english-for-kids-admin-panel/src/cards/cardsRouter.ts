import {Router} from 'express';
import getCards from './cardsControl';

const cardsRouter = Router();

cardsRouter.get('/', getCards);

export default cardsRouter;
