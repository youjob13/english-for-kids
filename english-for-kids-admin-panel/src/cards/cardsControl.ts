import { Request, Response } from 'express';
import log4js from 'log4js';
import Category from '../models/Category';
import Card from '../models/Card';
import getCardData from '../shared/helperFunctions/getCardData';
import WordStatistics from '../models/WordStatistics';

const logger = log4js.getLogger();

export const getCards = async (req: Request, res: Response) => {
  try {
    const { limit } = req.query;

    const [categories, categoryCount] = await Promise.all([
      Category.find().populate('cards').limit(limit).skip(req.skip)
        .lean()
        .exec(),
      Category.countDocuments(),
    ]);

    return res.json({
      object: 'list',
      totalPageCount: categoryCount,
      data: categories,
    });
  } catch (error) {
    return res.status(400).json({message: error});
  }
};

export const updateCard = async (req: Request, res: Response) => {
  try {
    const { id: cardId } = req.query;
    const { wordName, wordTranslation } = req.body;

    const [imageSRC, soundSRC] = await getCardData(req.files); // TODO: rename

    const card = await Card.findById(cardId);

    const updatedCard = await Card.findByIdAndUpdate({ _id: cardId },
      {
        name: wordName || card.name,
        translate: wordTranslation || card.translate,
        imageSRC: imageSRC || card.imageSRC,
        audioSRC: soundSRC || card.audioSRC,
      },
      { new: true });

    return res.json(updatedCard);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const removeCard = async (req: Request, res: Response) => {
  try {
    const { id: cardId } = req.query;

    if (!cardId) {
      return res.status(400).json('Not enough data: (word id)');
    }

    await Card.findByIdAndDelete(cardId);
    await WordStatistics.findByIdAndDelete(cardId);

    return res.json('Word deleted');
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const createCard = async (req: Request, res: Response) => {
  try {
    const { wordName, wordTranslation } = req.body;
    const { id: categoryId } = req.query;

    if (!categoryId) {
      return res.status(400).json({message: 'Not enough data: (category id)'});
    }

    const [imageSRC, soundSRC] = await getCardData(req.files);

    const newCard = await new Card({
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

    await Category.findByIdAndUpdate({_id: categoryId}, {
      $push: {
        cards: newCard,
      },
    }, {new: true});

    return res.json(newCard);
  } catch (error) {
    return res.status(400).json(error);
  }
};
