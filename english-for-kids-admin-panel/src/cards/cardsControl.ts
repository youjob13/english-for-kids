import { Request, Response } from 'express';
import log4js from 'log4js';
import state from '../storage/cards';

const logger = log4js.getLogger();
logger.level = 'debug';

export const getCards = async (req: Request, res: Response) => {
  try {
    return res.json(state.categories);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const updateCard = async (req: Request, res: Response) => {
  try {
    const {card: cardId, category: categoryId} = req.headers;
    const {wordName, wordTranslation} = req.body;

    state.categories = state.categories.map(
      (cardsData) => {
        if (cardsData.id.toString() === categoryId) {
          return {
            ...cardsData,
            cards: cardsData.cards.map((card) => {
              if (card.id === cardId) {
                // const newImage = req.files[1];

                return {
                  ...card,
                  name: wordName || card.name,
                  translate: wordTranslation || card.translate,
                  imageSRC: card.imageSRC,
                  audioSRC: card.audioSRC,
                };
              }

              return card;
            }),
          };
        }
        return cardsData;
      },
    );

    return res.json(`${wordName} ${wordTranslation}`);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const removeCard = async (req: Request, res: Response) => {
  try {
    const { category: categoryId, card: cardId } = req.headers;

    if (!categoryId || !cardId) {
      return res.status(400).json('Bad request');
    }

    state.categories = state.categories.map(
      (cardsData) => {
        if (cardsData.id.toString() === categoryId) {
          return {
            ...cardsData,
            cards: cardsData.cards.filter((card) => card.id !== cardId),
          };
        }
        return cardsData;
      },
    );

    return res.json('Card deleted');
  } catch (error) {
    return res.status(400).json(error);
  }
};
