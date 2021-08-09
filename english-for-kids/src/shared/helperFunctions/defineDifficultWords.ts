import { IWordStatistic } from '../interfaces/api-models';
import calcPercentByCondition from './calcPercentByCondition';

const defineDifficultWords = (words: IWordStatistic[]): string[] => {
  const falseAnswers = [...words]
    .sort((wordStatistics, nextWordStatistics) => {
      if (!wordStatistics.wrong && !wordStatistics.hit) {
        return -1;
      }
      const firstWord = calcPercentByCondition(
        wordStatistics.wrong || 0,
        wordStatistics.hit || 0
      );

      const secondWord = calcPercentByCondition(
        nextWordStatistics.wrong || 0,
        nextWordStatistics.hit || 0
      );

      if (firstWord === 100 || secondWord === 100) {
        return -1;
      }
      return firstWord - secondWord;
    })
    .filter(
      (wordStatistics) =>
        calcPercentByCondition(
          wordStatistics.wrong || 0,
          wordStatistics.hit || 0
        ) !== 100
    )
    .map((wordStatistics) => wordStatistics._id);
  falseAnswers.length = 8;

  return falseAnswers;
};

export default defineDifficultWords;
