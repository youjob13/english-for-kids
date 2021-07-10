import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  CardsReducerType,
  DifficultWordsReducerType,
  GameReducerType,
  StatisticReducerType,
} from '../../shared/interfaces/store-models';
import CardWrapperInGame from './CardGame/CardWrapperInGame';
import { RouteParams } from '../../shared/interfaces/api-models';
import { prepareGameProcess, stopGame } from '../../store/gameSlice';
import playAudio from '../../shared/helperFunctions/playSound';
import capitalizeWord from '../../shared/helperFunctions/capitalizeWord';
import Title from '../../shared/baseComponents/Title/Title';
import {
  CATEGORY_FIELD_STYLES,
  REPEAT_WORD_STYLES,
  START_GAME_STYLES,
} from '../../shared/stylesVariables';
import AnswerList from './AnswerList/AnswerList';
import { getDifficultWordsStatistics } from '../../store/statisticSlice';
import { getDifficultWords } from '../../store/difficultWordsSlice';
import { FIRST_ELEMENT, GameMode } from '../../shared/globalVariables';
import defineCurrentCategory from '../../shared/helperFunctions/defineCurrentCategory';

const Category = (): ReactElement => {
  const dispatch = useDispatch();
  const { category: categoryPath } = useParams<RouteParams>();
  const { gameMode, currentQuestion, currentGameAnswers } = useSelector(
    (state: GameReducerType) => state.gameReducer
  );
  const { cardsData } = useSelector(
    (state: CardsReducerType) => state.cardsReducer
  );

  const currentCategory = defineCurrentCategory(cardsData, categoryPath);
  const audioSRC = currentQuestion && currentQuestion.audioSRC;
  const cards =
    (currentCategory && Object.values(currentCategory)[FIRST_ELEMENT]) || [];

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

  const { difficultWords } = useSelector(
    (state: StatisticReducerType) => state.statisticReducer // TODO: resolve
  );
  const { currentDifficultWordList } = useSelector(
    (state: DifficultWordsReducerType) => state.difficultWordsReducer
  );

  const onStartGameClick = (): void => {
    dispatch(
      prepareGameProcess(
        categoryPath === 'difficult-words' ? currentDifficultWordList : cards
      )
    );
  };
  const onSoundPlayButtonClick = (): void => {
    if (audioSRC) {
      playAudio(audioSRC);
    }
  };

  useEffect(() => {
    dispatch(getDifficultWordsStatistics());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getDifficultWords(difficultWords, cardsData));
  }, [difficultWords, cardsData, dispatch]);

  const gameCards =
    categoryPath === 'difficult-words' ? currentDifficultWordList : cards; // TODO: костыль убрать

  return (
    <>
      <Title>Category: {capitalizeWord(categoryPath)}</Title>
      <ul className={CATEGORY_FIELD_STYLES}>
        {gameCards.map((card, index) => (
          <CardWrapperInGame key={index.toString()} card={card} />
        ))}
      </ul>
      {gameMode === GameMode.READY_TO_GAME && (
        <button
          className={START_GAME_STYLES}
          type="button"
          onClick={onStartGameClick}
        >
          Start Game
        </button>
      )}
      {gameMode === GameMode.IN_GAME && (
        <button
          className={REPEAT_WORD_STYLES}
          type="button"
          onClick={onSoundPlayButtonClick}
        >
          Repeat
        </button>
      )}
      <AnswerList answerList={currentGameAnswers} />
    </>
  );
};

export default Category;
