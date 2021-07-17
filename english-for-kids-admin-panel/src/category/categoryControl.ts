import { Request, Response } from 'express';
import log4js from 'log4js';
import state from '../storage/cards';

const uniqid = require('uniqid');

const logger = log4js.getLogger();
logger.level = 'debug';

export const createCategory = async (req: Request, res: Response) => {
  try {
    logger.debug(req.body);

    const { categoryName } = req.body;

    if (!categoryName) {
      return res.status(400).json('Category is not exist');
    }

    state.categories.push({
      id: uniqid(),
      cards: [],
      category: categoryName,
    });

    return res.json(state.categories);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { prevCategoryName, newCategoryName } = req.body;

    if (!prevCategoryName || !newCategoryName) {
      return res.status(400).json('Category is not exist');
    }

    state.categories = state.categories.map((cardData) => {
      if (cardData.category === prevCategoryName) {
        return {
          ...cardData,
          category: newCategoryName,
        };
      }

      return cardData;
    });

    return res.json(state.categories);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const removeCategory = async (req: Request, res: Response) => {
  try {
    const { category } = req.headers;
    logger.debug(category);
    if (!category) {
      return res.status(400).json('Category is not exist');
    }

    const foundedCategoryIndex = state.categories.findIndex(
      (cardData) => cardData.id.toString() === category,
    );

    if (!foundedCategoryIndex && foundedCategoryIndex > 0) {
      return res.status(404).json('Category is not founded');
    }

    state.categories.splice(foundedCategoryIndex, 1);

    return res.json('Category deleted');
  } catch (error) {
    return res.status(400).json(error);
  }
};
