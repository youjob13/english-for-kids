import { Request, Response } from 'express';
import log4js from 'log4js';
import Category from '../models/Category';
import Card from '../models/Card';

const cloudinary = require('../../utils/cloudinary');

const logger = log4js.getLogger();

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
    const { card: cardId } = req.headers;
    const { wordName, wordTranslation } = req.body;

    let cloudinaryImageURL = '';
    let cloudinaryAudioURL = '';

    if (req.files && req.files.length && Array.isArray(req.files)) {
      const [fileOne, fileTwo] = req.files;

      let image = '';
      if (fileOne.fieldname === 'image') {
        image = fileOne.path;
      } else {
        image = fileTwo ? fileTwo.path : '';
      }

      if (image) {
        const cloudinaryImage = await cloudinary.uploader.upload(image);
        cloudinaryImageURL = cloudinaryImage.url;
      }

      let sound = '';
      if (fileOne.fieldname === 'sound') {
        sound = fileOne.path;
      } else {
        sound = fileTwo ? fileTwo.path : '';
      }

      if (sound) {
        const cloudinaryAudio = await cloudinary.uploader.upload(sound, {
          resource_type: 'video',
        });
        cloudinaryAudioURL = cloudinaryAudio.url;
      }
    }

    const card = await Card.findById(cardId);
    logger.debug(cloudinaryImageURL);

    const updatedCard = await Card.findByIdAndUpdate({_id: cardId},
      {
        name: wordName || card.name,
        translate: wordTranslation || card.translate,
        imageSRC: cloudinaryImageURL || card.imageSRC,
        audioSRC: cloudinaryAudioURL || card.audioSRC,
      },
      {new: true});

    return res.json(updatedCard);
  } catch (error) {
    logger.debug(error);
    return res.status(400).json(error);
  }
};

export const removeCard = async (req: Request, res: Response) => {
  try {
    const { category: categoryId, card: cardId } = req.headers;

    if (!cardId || !categoryId) {
      return res.status(400).json('Not enough data');
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
    const { category: categoryId } = req.headers;

    if (!categoryId) {
      return res.status(400).json('Not enough data: (category id)');
    }

    let image = '';
    let sound = '';

    if (req.files && req.files.length && Array.isArray(req.files)) {
      const [fileOne, fileTwo] = req.files;

      image = fileOne.fieldname === 'image'
        ? fileOne.path
        : fileTwo.path;

      if (fileTwo) {
        sound = fileOne.fieldname === 'sound'
          ? fileOne.path
          : fileTwo.path;
      }
    }

    const cloudinaryImage = await cloudinary.uploader.upload(image);
    const cloudinaryAudio = await cloudinary.uploader.upload(sound, {
      resource_type: 'video',
    });

    const newCard = new Card({
      name: wordName,
      translate: wordTranslation,
      imageSRC: cloudinaryImage.url,
      audioSRC: cloudinaryAudio.url,
    });

    newCard.save();

    const category = await Category.findById(categoryId);
    category.cards.push(newCard);
    category.save();

    return res.json(newCard);
  } catch (error) {
    return res.status(400).json(error);
  }
};
