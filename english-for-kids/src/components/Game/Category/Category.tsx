import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RouteParams } from '../../../shared/interfaces/api-models';
import { prepareGameProcess, stopGame } from '../../../store/gameSlice';
import playAudio from '../../../shared/helperFunctions/playSound';
import Title from '../../../shared/baseComponents/Title/Title';
import AnswerList from './AnswerList/AnswerList';
import { getDifficultWordsStatistics } from '../../../store/statisticSlice';
import { getDifficultWords } from '../../../store/difficultWordsSlice';
import { GameMode } from '../../../shared/globalVariables';
import defineCurrentCategory from '../../../shared/helperFunctions/defineCurrentCategory';
import {
  getDifficultWordsState,
  getGameState,
  getStatisticsState,
  getWordsState,
} from '../../../shared/selectors';
import Categories from './Categories/Categories';
import CategoryControls from './CategoryControls/CategoryControls';

const Category = (): ReactElement => {
  const dispatch = useDispatch();
  const { category: categoryPath } = useParams<RouteParams>();
  const { difficultWords } = useSelector(getStatisticsState); // TODO: resolve
  const { currentDifficultWordList } = useSelector(getDifficultWordsState);
  const { gameMode, currentQuestion, currentGameAnswers } =
    useSelector(getGameState);
  const { cardsData } = useSelector(getWordsState);

  const currentCategory = defineCurrentCategory(cardsData, categoryPath);
  const audioSRC = currentQuestion && currentQuestion.audioSRC;
  const cards = (currentCategory && currentCategory.words) || [];

  useEffect(() => {
    if (audioSRC) {
      playAudio(audioSRC);
    }
  }, [currentQuestion, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(stopGame(GameMode.NO_GAME)); // TODO: realise correct exit game
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
    dispatch(
      prepareGameProcess(
        categoryPath === 'difficult-words' ? currentDifficultWordList : cards
      )
    );
  };

  const gameCards =
    categoryPath === 'difficult-words' ? currentDifficultWordList : cards; // TODO: костыль убрать

  return (
    <>
      <Title>Category: {categoryPath}</Title>
      <Categories gameCards={gameCards} currentQuestion={currentQuestion} />
      <CategoryControls
        onStartGameClick={onStartGameClick}
        onSoundPlayButtonClick={onSoundPlayButtonClick}
        gameMode={gameMode}
      />
      <AnswerList answerList={currentGameAnswers} />
    </>
  );
};

export default Category;
