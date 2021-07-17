import { Request, Response } from 'express';
import state from '../storage/cards';

const uniqid = require('uniqid');

export const getCards = async (req: Request, res: Response) => {
  try {
    if (!state.categories) {
      return res.status(404).json('Cards is not founded');
    }
    return res.json(state.categories);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const updateCard = async (req: Request, res: Response) => {
  try {
    const { card: cardId, category: categoryId } = req.headers;
    const { wordName, wordTranslation } = req.body;

    let image = '';
    let sound = '';

    if (req.files && req.files.length && Array.isArray(req.files)) {
      const [fileOne, fileTwo] = req.files;

      image = fileOne.fieldname === 'image'
        ? `http://localhost:5000/${fileOne.filename}`
        : `http://localhost:5000/${fileTwo.filename}`;

      if (fileTwo) {
        sound = fileOne.fieldname === 'sound'
          ? `http://localhost:5000/${fileOne.filename}`
          : `http://localhost:5000/${fileTwo.filename}`;
      }
    }

    let updatedCard;

    state.categories = state.categories.map(
      (cardsData) => {
        if (cardsData.id === categoryId) {
          return {
            ...cardsData,
            cards: cardsData.cards.map((card) => {
              if (card.id === cardId) {
                updatedCard = {
                  ...card,
                  name: wordName || card.name,
                  translate: wordTranslation || card.translate,
                  imageSRC: image || card.imageSRC,
                  audioSRC: sound || card.audioSRC,
                };
                return updatedCard;
              }

              return card;
            }),
          };
        }
        return cardsData;
      },
    );

    return res.json(updatedCard);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const removeCard = async (req: Request, res: Response) => {
  try {
    const { category: categoryId, card: cardId } = req.headers;

    if (!categoryId || !cardId) {
      return res.status(400).json('Not enough data');
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
    const { wordName, wordTranslation } = req.body;
    const { category: categoryId } = req.headers;

    if (!categoryId) {
      return res.status(400).json('Not enough data: (category id)');
    }

    let image = '';
    let sound = '';

    if (req.files && req.files.length && Array.isArray(req.files)) {
      const [fileOne, fileTwo] = req.files;

      image = fileOne.fieldname === 'image'
        ? `http://localhost:5000/${fileOne.filename}`
        : `http://localhost:5000/${fileTwo.filename}`;

      if (fileTwo) { // TODO: убрать костыль
        sound = fileOne.fieldname === 'sound'
          ? `http://localhost:5000/${fileOne.filename}`
          : `http://localhost:5000/${fileTwo.filename}`;
      }
    }

    const newCard = {
      name: wordName,
      translate: wordTranslation,
      imageSRC: image,
      audioSRC: sound,
      id: uniqid(),
    };

    state.categories = state.categories.map(
      (cardsData) => {
        if (cardsData.id === categoryId) {
          cardsData.cards.push(newCard);
        }
        return cardsData;
      },
    );

    return res.json(newCard);
  } catch (error) {
    return res.status(400).json(error);
  }
};
