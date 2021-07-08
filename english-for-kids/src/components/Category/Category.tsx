import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  CardsReducerType,
  DifficultWordsReducerType,
  GameReducerType,
  StatisticReducerType,
} from '../../shared/interfaces/store-models';
import { GameMode } from '../../shared/interfaces/props-models';
import CardGame from './CardGame/CardGame';
import { ICardsData } from '../../shared/interfaces/cards-models';
import { RouteParams } from '../../shared/interfaces/api-models';
import { prepareGameProcess, stopGame } from '../../store/gameSlice';
import playAudio from '../../shared/helpersFunction/playSound';
import capitalizeWord from '../../shared/helpersFunction/capitalizeWord';
import Title from '../../shared/baseComponents/Title/Title';
import {
  CATEGORY_FIELD_STYLES,
  REPEAT_WORD_STYLES,
  START_GAME_STYLES,
} from '../../shared/stylesVariables';
import AnswerList from './AnswerList/AnswerList';
import { getDifficultWordsStatistics } from '../../store/statisticSlice';
import { getDifficultWords } from '../../store/difficultWordsSlice';

const defineCurrentCategory = (
  cardsData: ICardsData[],
  categoryPath: string
): ICardsData | undefined =>
  cardsData.find(
    (cardsDataItem) => Object.keys(cardsDataItem).toString() === categoryPath
  );

const Category = (): ReactElement => {
  const dispatch = useDispatch();
  const { category: categoryPath } = useParams<RouteParams>();
  const { gameMode, currentQuestion, currentGameAnswers } = useSelector(
    (state: GameReducerType) => state.gameReducer
  );
  const { cards: cardsData } = useSelector(
    (state: CardsReducerType) => state.cardsReducer
  );

  const audioSRC = currentQuestion && currentQuestion.audioSRC;
  const currentCategory = defineCurrentCategory(cardsData, categoryPath);
  const cards = (currentCategory && Object.values(currentCategory)[0]) || [];

  useEffect(() => {
    if (audioSRC) {
      playAudio(audioSRC);
    }
  }, [currentQuestion]);

  useEffect(() => {
    return () => {
      dispatch(stopGame(GameMode.NO_GAME)); // TODO: realise correct exit game
    };
  }, [categoryPath]);

  const { difficultWords } = useSelector(
    (state: StatisticReducerType) => state.statisticReducer
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

  useEffect(() => {
    dispatch(getDifficultWordsStatistics());
  }, []);

  useEffect(() => {
    dispatch(getDifficultWords(difficultWords, cardsData));
  }, [difficultWords]);

  const gameCards =
    categoryPath === 'difficult-words' ? currentDifficultWordList : cards; // TODO: костыль убрать

  return (
    <>
      <Title>Category: {capitalizeWord(categoryPath)}</Title>
      <ul className={CATEGORY_FIELD_STYLES}>
        {gameCards.map((card, index) => (
          <CardGame key={index.toString()} card={card} />
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
          onClick={() => audioSRC && playAudio(audioSRC)}
        >
          Repeat
        </button>
      )}
      <AnswerList answerList={currentGameAnswers} />
    </>
  );
};

export default Category;
