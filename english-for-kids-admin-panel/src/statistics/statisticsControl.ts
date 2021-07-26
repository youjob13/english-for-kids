import { Request, Response } from 'express';
import { getLogger } from 'log4js';
import WordStatistics from '../models/WordStatistics';

const logger = getLogger();

export const getStatistics = async (req: Request, res: Response) => {
  try {
    const wordsStatistics = await WordStatistics.find();
    return res.json(wordsStatistics);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const updateStatistics = async (req: Request, res: Response) => {
  try {
    const { wordId, wordStatistics: {hit, wrong, train} } = req.body;

    logger.debug('train', train);
    logger.debug('wrong', wrong);

    const updatedWord = await WordStatistics.findById(wordId);
    const a = await updatedWord.updateOne({
      hit: hit ? updatedWord.hit + 1 : updatedWord.hit,
      wrong: wrong ? updatedWord.wrong + 1 : updatedWord.wrong,
      train: train ? updatedWord.train + 1 : updatedWord.train,
    }, {
      new: true,
    });
    logger.debug('updatedWord', updatedWord);
    logger.debug('a', a);

    return res.json(a);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const resetStatistics = async (req: Request, res: Response) => {
  try {
    const wordsStatistics = await WordStatistics.find(); // TODO: ask
    const resetWordsStatisticsRequests = wordsStatistics.map((wordStatistics: any) => wordStatistics.update({
      train: 0,
      hit: 0,
      wrong: 0,
    }));

    await Promise.all(resetWordsStatisticsRequests);

    return res.json('Statistics reset');
  } catch (error) {
    return res.status(400).json({message: error});
  }
};
