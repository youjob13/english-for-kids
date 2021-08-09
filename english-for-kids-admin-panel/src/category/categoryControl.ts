import { Request, Response } from 'express';
import { getLogger } from 'log4js';
import Category from '../models/Category';
import Word from '../models/Word';
import WordStatistics from '../models/WordStatistics';

const logger = getLogger();
export const createCategory = async (req: Request, res: Response) => {
  try {
    const { categoryName } = req.body;

    if (!categoryName) {
      return res.status(400).json({message: 'Not enough data: (category name)'});
    }
    logger.debug(categoryName);
    const newCategory = new Category({
      category: categoryName,
      words: [],
    });

    newCategory.save();

    return res.json(newCategory);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { id: categoryId } = req.query;
    const { newCategoryName } = req.body;

    if (!newCategoryName || !categoryId) {
      return res.status(400).json('Not enough data: (new category name | category id)');
    }

    const updatedCategory = await Category.findByIdAndUpdate(
      { _id: categoryId },
      {
        category: newCategoryName,
      }, {
        new: true,
      },
    ).populate('words');

    return res.json(updatedCategory);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const removeCategory = async (req: Request, res: Response) => {
  try {
    const { id: categoryId } = req.query;

    if (!categoryId) {
      return res.status(400).json('Not enough data: (category id)');
    }

    const category = await Category.findById(categoryId);
    const deleteCardsRequests = category.words.map((cardId: string) => Word.findByIdAndDelete(cardId));
    const deleteWordStatisticsRequests = category.words.map((cardId: string) => WordStatistics.findByIdAndDelete(cardId));

    await Promise.all(deleteCardsRequests);
    await Promise.all(deleteWordStatisticsRequests);

    await Category.findByIdAndDelete(categoryId);

    return res.json('Category deleted');
  } catch (error) {
    return res.status(400).json(error);
  }
};
