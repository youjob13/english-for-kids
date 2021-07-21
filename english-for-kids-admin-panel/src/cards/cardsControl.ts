import { Request, Response } from 'express';
import Category from '../models/Category';
import Card from '../models/Card';
import getCardData from '../shared/helperFunctions/getCardData';

export const getCards = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find().populate('cards');

    if (!categories) {
      return res.status(404).json('ContentField is not exist');
    }

    return res.json(categories);
  } catch (error) {
    return res.status(400).json(error);
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
      return res.status(400).json('Not enough data: (card id)');
    }

    await Card.findByIdAndDelete(cardId);

    return res.json('Card deleted');
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const createCard = async (req: Request, res: Response) => {
  try {
    const { wordName, wordTranslation } = req.body;
    const { id: categoryId } = req.query;

    if (!categoryId) {
      return res.status(400).json('Not enough data: (category id)');
    }

    const [imageSRC, soundSRC] = await getCardData(req.files);

    const newCard = new Card({
      name: wordName,
      translate: wordTranslation,
      imageSRC,
      audioSRC: soundSRC,
    });
    newCard.save();

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
