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

    if (!req.files) {
      return res.status(400).json('Error while uploading file');
    }

    state.categories = state.categories.map(
      (cardsData) => {
        if (cardsData.id.toString() === categoryId) {
          return {
            ...cardsData,
            cards: cardsData.cards.map((card) => {
              if (card.id === cardId) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                const fileOne = req.files[0];
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                const fileTwo = req.files[1];

                const image = fileOne.fieldname === 'image'
                  ? `http://localhost:5000/${fileOne.filename}`
                  : `http://localhost:5000/${fileTwo.filename}`;
                let sound;

                if (fileTwo) { // TODO: убрать костыль
                  sound = fileOne.fieldname === 'sound'
                    ? `http://localhost:5000/${fileOne.filename}`
                    : `http://localhost:5000/${fileTwo.filename}`;
                }

                logger.debug('image', image);
                logger.debug('sound1', card.audioSRC);
                logger.debug('sound2', sound);
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
