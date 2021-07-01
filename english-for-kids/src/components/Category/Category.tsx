import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  CardsReducerType,
  GameReducerType,
} from '../../shared/interfaces/store-models';
import { GameMode } from '../../shared/interfaces/props-models';
import CardGameWrapper from './CardGameWrapper/CardGameWrapper';
import { ICardsData } from '../../shared/interfaces/cards-models';
import { RouteParams } from '../../shared/interfaces/api-models';
import { prepareGameProcess } from '../../store/gameSlice';
import playAudio from '../../shared/helpersFunction/playSound';
import capitalizeWord from '../../shared/helpersFunction/capitalizeWord';
import Title from '../../shared/baseComponents/Title/Title';
import {
  CATEGORY_FIELD_STYLES,
  REPEAT_WORD_STYLES,
  START_GAME_STYLES,
} from '../../shared/globalVariables';
import { getWordStatistic } from '../../shared/api/api';

const defineCurrentCategoryCards = (
  cardsData: ICardsData[],
  categoryPath: string
): ICardsData | undefined => {
  return cardsData.find(
    (cardsDataItem) => Object.keys(cardsDataItem).toString() === categoryPath
  );
};

const addUpdatedAskedWordStatisticToDataBase = (wordName: string): void => {
  const currentWordStatistic = getWordStatistic(wordName);

  const currentAskedCounter =
    (currentWordStatistic && currentWordStatistic.askedCounter) || 0;

  localStorage[wordName] = JSON.stringify({
    ...currentWordStatistic,
    askedCounter: currentAskedCounter + 1,
  });
};

const Category = (): ReactElement => {
  const dispatch = useDispatch();
  const { category: categoryPath } = useParams<RouteParams>();
  const { gameMode, currentQuestion } = useSelector(
    (state: GameReducerType) => state.gameReducer
  );
  const { cards: cardsData } = useSelector(
    (state: CardsReducerType) => state.cardsReducer
  );

  const audioSRC = (currentQuestion && currentQuestion.audioSRC) || '';

  useEffect(() => {
    playAudio(audioSRC);
    if (currentQuestion)
      addUpdatedAskedWordStatisticToDataBase(currentQuestion.name);
  }, [currentQuestion]);

  const currentCategoryCards = defineCurrentCategoryCards(
    cardsData,
    categoryPath
  );

  const cards = Object.values(currentCategoryCards!)[0];

  const onStartGameClick = (): void => {
    dispatch(prepareGameProcess(cards));
  };

  return (
    <>
      <Title>Category: {capitalizeWord(categoryPath)}</Title>
      <ul className={CATEGORY_FIELD_STYLES}>
        {cards.map((card, index) => (
          <CardGameWrapper key={index.toString()} card={card} />
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
          onClick={() => playAudio(audioSRC)}
        >
          Repeat
        </button>
      )}
    </>
  );
};

export default Category;
