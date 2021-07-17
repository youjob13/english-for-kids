import { Request, Response } from 'express';
import log4js from 'log4js';
import state from '../storage/cards';

const uniqid = require('uniqid');

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
        if (cardsData.id === categoryId) {
          return {
            ...cardsData,
            cards: cardsData.cards.map((card) => {
              if (card.id === cardId) {
                let image;
                let sound;

                if (req.files && req.files.length) {
                  const fileOne = (req.files as any)[0];
                  const fileTwo = (req.files as any)[1];

                  image = fileOne.fieldname === 'image'
                    ? `http://localhost:5000/${fileOne.filename}`
                    : `http://localhost:5000/${fileTwo.filename}`;

                  if (fileTwo) { // TODO: убрать костыль
                    sound = fileOne.fieldname === 'sound'
                      ? `http://localhost:5000/${fileOne.filename}`
                      : `http://localhost:5000/${fileTwo.filename}`;
                  }
                }

                return {
                  ...card,
                  name: wordName || card.name,
                  translate: wordTranslation || card.translate,
                  imageSRC: image || card.imageSRC,
                  audioSRC: sound || card.audioSRC,
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
        if (cardsData.id === categoryId) {
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

export const createCard = async (req: Request, res: Response) => {
  try {
    const {wordName, wordTranslation} = req.body;
    const {category: categoryId} = req.headers;

    // TODO: сделать проверку

    state.categories = state.categories.map(
      (cardsData) => {
        if (cardsData.id === categoryId) {
          cardsData.cards.push({
            name: wordName,
            translate: wordTranslation,
            imageSRC: '',
            audioSRC: '',
            id: uniqid(),
          });
        }
        return cardsData;
      },
    );

    return res.json('Card created');
  } catch (error) {
    return res.status(400).json(error);
  }
};
