import { Request, Response } from 'express';
import state from '../storage/cards';

const updateCategory = async (req: Request, res: Response) => {
  try {
    const {prevCategoryName, newCategoryName} = req.body;

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

export default updateCategory;
