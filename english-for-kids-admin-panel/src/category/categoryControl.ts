import { Request, Response } from 'express';
import Category from '../models/Category';
import Word from '../models/Word';
import WordStatistics from '../models/WordStatistics';
import { CategoryProp, ResponseCategoryMessage, ResponseStatus } from '../shared/globalVariables';
import { ICategory, ResponseMessage } from '../shared/interfaces/api-models';

export const createCategory = async (req: Request, res: Response): Promise<Response<ICategory | ResponseMessage>> => {
  try {
    const { categoryName } = req.body;

    if (!categoryName) {
      return res.status(ResponseStatus.BAD_REQUEST).json({message: ResponseCategoryMessage.NOT_CATEGORY_NAME});
    }

    const newCategory = new Category({
      category: categoryName,
      words: [],
    });

    newCategory.save();

    return res.json(newCategory);
  } catch (error) {
    return res.status(ResponseStatus.BAD_REQUEST).json({message: error});
  }
};

export const updateCategory = async (req: Request, res: Response): Promise<Response<ICategory | ResponseMessage>> => {
  try {
    const { id: categoryId } = req.query;
    const { newCategoryName } = req.body;

    if (!newCategoryName || !categoryId) {
      return res.status(ResponseStatus.BAD_REQUEST).json({message: ResponseCategoryMessage.NOT_CATEGORY_NAME_OR_ID});
    }

    const updatedCategory = await Category.findByIdAndUpdate(
      { _id: categoryId },
      {
        category: newCategoryName,
      }, {
        new: true,
      },
    ).populate(CategoryProp.WORDS);

    return res.json(updatedCategory);
  } catch (error) {
    return res.status(ResponseStatus.BAD_REQUEST).json({message: error});
  }
};

export const removeCategory = async (req: Request, res: Response): Promise<Response<ResponseMessage>> => {
  try {
    const { id: categoryId } = req.query;

    if (!categoryId) {
      return res.status(ResponseStatus.BAD_REQUEST).json({message: ResponseCategoryMessage.NOT_CATEGORY_ID});
    }

    const category = await Category.findById(categoryId);
    const deleteCardsRequests = category.words.map((cardId: string) => Word.findByIdAndDelete(cardId));
    const deleteWordStatisticsRequests = category.words.map((cardId: string) => WordStatistics.findByIdAndDelete(cardId));

    await Promise.all(deleteCardsRequests);
    await Promise.all(deleteWordStatisticsRequests);

    await Category.findByIdAndDelete(categoryId);

    return res.json({ message: ResponseCategoryMessage.CATEGORY_DELETED });
  } catch (error) {
    return res.status(ResponseStatus.BAD_REQUEST).json({message: error});
  }
};
