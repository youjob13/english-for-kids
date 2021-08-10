import React, { ReactElement, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { RouteParams } from '../../../shared/interfaces/api-models';
import { prepareGameProcess, stopGame } from '../../../store/gameSlice';
import playAudio from '../../../shared/helperFunctions/playSound';
import Title from '../../../shared/baseComponents/Title/Title';
import AnswerList from './AnswerList/AnswerList';
import { getDifficultWordsStatistics } from '../../../store/statisticSlice';
import { getDifficultWords } from '../../../store/difficultWordsSlice';
import { GameMode, Path } from '../../../shared/globalVariables';
import defineCurrentCategory from '../../../shared/helperFunctions/defineCurrentCategory';
import {
  getDifficultWordsState,
  getGameState,
  getStatisticsState,
  getWordsState,
} from '../../../store/selectors';
import Words from './Words/Words';
import GameControls from './GameControls/GameControls';

const CategoryPage = (): ReactElement => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { category: categoryPath } = useParams<RouteParams>();
  const { difficultWords } = useSelector(getStatisticsState);
  const { currentDifficultWordList } = useSelector(getDifficultWordsState);
  const { gameMode, currentQuestion, currentGameAnswers } =
    useSelector(getGameState);
  const { cardsData } = useSelector(getWordsState);

  const currentCategory = useMemo(
    () => defineCurrentCategory(cardsData, categoryPath),
    [cardsData, categoryPath]
  );
  const audioSRC = currentQuestion && currentQuestion.audioSRC;
  const cards = (currentCategory && currentCategory.words) || [];

  useEffect(() => {
    if (audioSRC) {
      playAudio(audioSRC);
    }
  }, [currentQuestion, dispatch]);
  useEffect(() => {
    return () => {
      dispatch(stopGame(GameMode.NO_GAME));
    };
  }, [categoryPath, dispatch]);
  useEffect(() => {
    dispatch(getDifficultWordsStatistics());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getDifficultWords(difficultWords, cardsData));
  }, [difficultWords, cardsData, dispatch]);

  const onSoundPlayButtonClick = (): void => {
    if (audioSRC) {
      playAudio(audioSRC);
    }
  };
  const onStartGameClick = (): void => {
    const currentCategoryPath =
      categoryPath === Path.DIFFICULT_WORDS ? currentDifficultWordList : cards;

    dispatch(prepareGameProcess(currentCategoryPath));
  };

  const gameCards =
    categoryPath === Path.DIFFICULT_WORDS ? currentDifficultWordList : cards;

  return (
    <>
      <Title>{t('category_title', { categoryPath })}</Title>
      <Words gameCards={gameCards} currentQuestion={currentQuestion} />
      <GameControls
        onStartGameClick={onStartGameClick}
        onSoundPlayButtonClick={onSoundPlayButtonClick}
        gameMode={gameMode}
      />
      <AnswerList answerList={currentGameAnswers} />
    </>
  );
};

export default CategoryPage;
