import calcPercentByCondition from './calcPercentByCondition';
import { ICardsData } from '../interfaces/cards-models';
import { IWordStatistic, IWordStatisticData } from '../interfaces/api-models';

const getUnsortedStatistics = (
  cardsData: ICardsData[],
  wordsStatistics: IWordStatistic[]
): IWordStatisticData[] =>
  cardsData
    .map(({ category, words }) => {
      return words.map(({ name, translate }) => ({
        wordName: name,
        translation: translate,
        category,
      }));
    })
    .flat()
    .map((statistics, index) => ({
      ...statistics,
      hit: (wordsStatistics[index] && wordsStatistics[index].hit) || 0,
      train: (wordsStatistics[index] && wordsStatistics[index].train) || 0,
      wrong: (wordsStatistics[index] && wordsStatistics[index].wrong) || 0,
      correctAnswersPercent: calcPercentByCondition(
        (wordsStatistics[index] && wordsStatistics[index].hit) || 0,
        (wordsStatistics[index] && wordsStatistics[index].wrong) || 0
      ),
    }));

export default getUnsortedStatistics;
