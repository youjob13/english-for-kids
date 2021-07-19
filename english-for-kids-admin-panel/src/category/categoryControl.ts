import { Request, Response } from 'express';
import log4js from 'log4js';
import Category from '../models/Category';

const logger = log4js.getLogger();

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { categoryName } = req.body;

    if (!categoryName) {
      return res.status(400).json('Not enough data: (category name)');
    }

    const newCategory = new Category({
      category: categoryName,
      cards: [],
    });

    newCategory.save();

    return res.json(newCategory);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const {category: categoryId} = req.headers;
    const { newCategoryName } = req.body;

    if (!newCategoryName || !categoryId) {
      return res.status(400).json('Not enough data: (new category name | category id)');
    }

    const updatedCategory = await Category.findByIdAndUpdate(
      {_id: categoryId},
      {category: newCategoryName},
      {new: true},
    );

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

    await Category.findByIdAndDelete(categoryId); // TODO: удалять карточки текущей категории из db

    return res.json('Category deleted');
  } catch (error) {
    return res.status(400).json(error);
  }
};
