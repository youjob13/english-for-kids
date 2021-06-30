import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import classes from './category.module.scss';
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

const CATEGORY_FIELD_STYLES = classes.categoryField;

const defineCurrentCategoryCards = (
  cardsData: ICardsData[],
  categoryPath: string
): ICardsData | undefined => {
  return cardsData.find(
    (cardsDataItem) => Object.keys(cardsDataItem).toString() === categoryPath
  );
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

  useEffect(() => {
    playAudio(audioSRC);
  }, [currentQuestion]);

  const audioSRC = (currentQuestion && currentQuestion.audioSRC) || '';

  const currentCategoryCards = defineCurrentCategoryCards(
    cardsData,
    categoryPath
  );

  const cards = Object.values(currentCategoryCards!)[0];

  const onStartGameClick = () => {
    dispatch(prepareGameProcess(cards));
  };

  return (
    <>
      <ul className={CATEGORY_FIELD_STYLES}>
        {cards.map((card, index) => (
          <CardGameWrapper key={index.toString()} card={card} />
        ))}
      </ul>
      {gameMode === GameMode.READY_TO_GAME && (
        <button type="button" onClick={onStartGameClick}>
          Start Game
        </button>
      )}
      {gameMode === GameMode.IN_GAME && (
        <button type="button" onClick={() => playAudio(audioSRC)}>
          Repeat
        </button>
      )}
    </>
  );
};

export default Category;
