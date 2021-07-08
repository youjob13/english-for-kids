import { getWordStatistic } from '../api/api';

export const updateTrainWordStatistics = (wordName: string): void => {
  const currentWordStatistic = getWordStatistic(wordName);

  const currentTrainCounter =
    (currentWordStatistic && currentWordStatistic.trainCounter) || 0;

  localStorage[wordName] = JSON.stringify({
    ...currentWordStatistic,
    trainCounter: currentTrainCounter + 1,
  });
};

export const updateWordStatistics = (
  wordName: string,
  answerResult: boolean
): void => {
  const currentWordStatistic = getWordStatistic(wordName);
  let currentAnswerCounter;

  if (answerResult) {
    currentAnswerCounter =
      currentWordStatistic && currentWordStatistic.trueAnswerCounter;

    localStorage[wordName] = JSON.stringify({
      ...currentWordStatistic,
      trueAnswerCounter: (currentAnswerCounter || 0) + 1,
    });
  } else {
    currentAnswerCounter =
      currentWordStatistic && currentWordStatistic.falseAnswerCounter;

    localStorage[wordName] = JSON.stringify({
      ...currentWordStatistic,
      falseAnswerCounter: (currentAnswerCounter || 0) + 1,
    });
  }
};
