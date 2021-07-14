import { Request, Response } from 'express';
import state from '../storage/cards';

const getCards = async (req: Request, res: Response) => {
  try {
    return res.json(state.categories);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export default getCards;
