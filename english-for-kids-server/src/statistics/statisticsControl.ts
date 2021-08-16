import { Request, Response } from 'express';
import { IWordStatistics, ResponseMessage } from '../shared/interfaces/api-models';
import WordStatistics from '../models/WordStatistics';
import { ResponseStatisticsMessage, ResponseStatus } from '../shared/globalVariables';

export const getStatistics = async (req: Request, res: Response): Promise<Response<IWordStatistics[] | ResponseMessage>> => {
  try {
    const wordsStatistics = await WordStatistics.find();
    return res.json(wordsStatistics);
  } catch (error) {
    return res.status(ResponseStatus.BAD_REQUEST).json({message: error});
  }
};

export const updateStatistics = async (req: Request, res: Response): Promise<Response<IWordStatistics | ResponseMessage>> => {
  try {
    const { wordId, wordStatistics: { hit, wrong, train } } = req.body;

    const foundWord = await WordStatistics.findById(wordId);
    const updatedWord = await foundWord.updateOne({
      hit: hit ? foundWord.hit + 1 : foundWord.hit,
      wrong: wrong ? foundWord.wrong + 1 : foundWord.wrong,
      train: train ? foundWord.train + 1 : foundWord.train,
    }, {
      new: true,
    });

    return res.json(updatedWord);
  } catch (error) {
    return res.status(ResponseStatus.BAD_REQUEST).json({message: error});
  }
};

export const resetStatistics = async (req: Request, res: Response): Promise<Response<ResponseMessage>> => {
  try {
    const wordsStatistics = await WordStatistics.find();
    const resetWordsStatisticsRequests = wordsStatistics.map((wordStatistics: IWordStatistics) => wordStatistics.update({
      train: 0,
      hit: 0,
      wrong: 0,
    }));

    await Promise.all(resetWordsStatisticsRequests);

    return res.json({ message: ResponseStatisticsMessage.RESET});
  } catch (error) {
    return res.status(ResponseStatus.BAD_REQUEST).json({ message: error });
  }
};
