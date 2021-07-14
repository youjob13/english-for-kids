import { Request, Response } from 'express';
import cards from '../storage/cards';

const getCards = async (req: Request, res: Response) => {
  try {
    return res.json(cards);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export default getCards;
