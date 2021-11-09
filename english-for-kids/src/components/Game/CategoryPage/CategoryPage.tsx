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
import {
  failAnswerSound,
  GameMode,
  LocalesKey,
  Path,
  rightAnswerSound,
} from '../../../shared/globalVariables';
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
    dispatch(getDifficultWordsStatistics());
  }, [dispatch]);
  useEffect(() => {
    if (audioSRC) {
      playAudio(audioSRC);
    }
  }, [dispatch, audioSRC]);
  useEffect(() => {
    return () => {
      dispatch(stopGame(GameMode.NO_GAME));
    };
  }, [dispatch, categoryPath]);
  useEffect(() => {
    dispatch(getDifficultWords(difficultWords, cardsData));
  }, [dispatch, difficultWords, cardsData]);
  useEffect(() => {
    if (gameMode === GameMode.IN_GAME) {
      if (!currentGameAnswers.length) return;
      if (currentGameAnswers[currentGameAnswers.length - 1]) {
        playAudio(rightAnswerSound);
      } else {
        playAudio(failAnswerSound);
      }
    }
  }, [dispatch, currentGameAnswers, gameMode]);

  const onSoundPlayButtonClick = (): void => {
    if (audioSRC) {
      playAudio(audioSRC);
    }
  };

  const gameCards =
    categoryPath === Path.DIFFICULT_WORDS ? currentDifficultWordList : cards;

  const onStartGameClick = (): void => {
    dispatch(prepareGameProcess(gameCards));
  };

  return (
    <>
      <Title>{t(LocalesKey.CATEGORY_TITLE, { categoryPath })}</Title>
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
