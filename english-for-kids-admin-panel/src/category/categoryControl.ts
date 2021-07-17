import { Request, Response } from 'express';
import state from '../storage/cards';

const uniqid = require('uniqid');

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { categoryName } = req.body;

    if (!categoryName) {
      return res.status(400).json('Not enough data: (category name)');
    }

    const newCategory = {
      id: uniqid(),
      cards: [],
      category: categoryName,
    };

    state.categories.push(newCategory);

    return res.json(newCategory);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const {category: categoryId} = req.headers;
    const { prevCategoryName, newCategoryName } = req.body;

    if (!prevCategoryName || !newCategoryName || !categoryId) {
      return res.status(400).json('Not enough data: (previous category name | new category name | category id)');
    }

    let updatedCategory;

    state.categories = state.categories.map((cardData) => {
      if (cardData.id === categoryId) {
        updatedCategory = {
          ...cardData,
          category: newCategoryName,
        };
        return updatedCategory;
      }

      return cardData;
    });

    return res.json(updatedCategory);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const removeCategory = async (req: Request, res: Response) => {
  try {
    const { category: categoryId } = req.headers;

    if (!categoryId) {
      return res.status(400).json('Not enough data: (category id)');
    }

    const foundCategoryIndex = state.categories.findIndex(
      (cardData) => cardData.id === categoryId,
    );

    if (!foundCategoryIndex && foundCategoryIndex > 0) {
      return res.status(404).json('Category is not founded');
    }

    state.categories.splice(foundCategoryIndex, 1);

    return res.json('Category deleted');
  } catch (error) {
    return res.status(400).json(error);
  }
};
