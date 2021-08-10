import { Request, Response } from 'express';
import Category from '../models/Category';
import Word from '../models/Word';
import pullMediaData from '../shared/helperFunctions/pullMediaData';
import WordStatistics from '../models/WordStatistics';
import {
  CategoryProp, List, ResponseWordsMessage, ResponseStatus,
} from '../shared/globalVariables';
import { IWord, ResponseMessage, ResponseWords } from '../shared/interfaces/api-models';

export const getWords = async (req: Request, res: Response): Promise<Response<ResponseWords | ResponseMessage>> => {
  try {
    const { limit } = req.query;

    const [categories, categoryCount] = await Promise.all([
      Category.find().populate(CategoryProp.WORDS).limit(limit).skip(req.skip)
        .lean()
        .exec(),
      Category.countDocuments(),
    ]);

    return res.json({
      object: List,
      totalPageCount: categoryCount,
      data: categories,
    });
  } catch (error) {
    return res.status(ResponseStatus.BAD_REQUEST).json({ message: error });
  }
};

export const updateWord = async (req: Request, res: Response): Promise<Response<IWord | ResponseMessage>> => {
  try {
    const { id: cardId } = req.query;
    const { wordName, wordTranslation } = req.body;

    const [imageSRC, soundSRC] = await pullMediaData(req.files);

    const word = await Word.findById(cardId);

    const updatedWord = await Word.findByIdAndUpdate({ _id: cardId },
      {
        name: wordName || word.name,
        translate: wordTranslation || word.translate,
        imageSRC: imageSRC || word.imageSRC,
        audioSRC: soundSRC || word.audioSRC,
      },
      { new: true });

    return res.json(updatedWord);
  } catch (error) {
    return res.status(ResponseStatus.BAD_REQUEST).json({ message: error });
  }
};

export const removeWord = async (req: Request, res: Response): Promise<Response<ResponseMessage>> => {
  try {
    const { id: cardId } = req.query;

    if (!cardId) {
      return res.status(ResponseStatus.BAD_REQUEST).json({message: ResponseWordsMessage.NOT_WORD_ID});
    }

    await Word.findByIdAndDelete(cardId);
    await WordStatistics.findByIdAndDelete(cardId);

    return res.json({message: ResponseWordsMessage.WORD_DELETED});
  } catch (error) {
    return res.status(ResponseStatus.BAD_REQUEST).json({message: error});
  }
};

export const createWord = async (req: Request, res: Response): Promise<Response<IWord | ResponseMessage>> => {
  try {
    const { wordName, wordTranslation } = req.body;
    const { id: categoryId } = req.query;

    if (!categoryId) {
      return res.status(ResponseStatus.BAD_REQUEST).json({ message: ResponseWordsMessage.NOT_CATEGORY_ID });
    }

    const [imageSRC, soundSRC] = await pullMediaData(req.files);

    const newCard = await new Word({
      name: wordName,
      translate: wordTranslation,
      imageSRC,
      audioSRC: soundSRC,
    });
    newCard.save();

    const newWordStatistics = await new WordStatistics({
      _id: newCard._id,
      train: 0,
      hit: 0,
      wrong: 0,
    });
    newWordStatistics.save();

    await Category.findByIdAndUpdate({ _id: categoryId }, {
      $push: {
        words: newCard,
      },
    }, { new: true });

    return res.json(newCard);
  } catch (error) {
    return res.status(ResponseStatus.BAD_REQUEST).json({message: error});
  }
};
