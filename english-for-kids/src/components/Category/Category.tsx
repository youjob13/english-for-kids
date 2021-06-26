import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';
import classes from './category.module.scss';
import {
  GameAndCardsReducerType,
  IGameState,
} from '../../shared/interfaces/store-models';
import { ICategoryProps } from '../../shared/interfaces/props-models';
import CardCategoryWrapper from './CardCategoryWrapper';
import { ICardItem, ICardsData } from '../../shared/interfaces/cards-models';
import { RouteParams } from '../../shared/interfaces/api-models';
import { setGivenAnswer, prepareGameProcess } from '../../store/gameSlice';
import playAudio from '../../shared/helpersFunction/playSound';
import {
  getCurrentQuestion,
  getIsReadyToStartedGame,
  getIsStartedGame,
} from '../../store/gameSelectors';
import getCardsData from '../../store/cardsSelectors';

const Category = ({
  cardsData,
  isReadyToStartedGame,
  startNewGame,
  currentQuestion,
  isStartedGame,
  giveAnswer,
}: ICategoryProps): ReactElement => {
  const { category: categoryPath } = useParams<RouteParams>();
  const { audioSRC }: ICardItem = currentQuestion || '';

  const currentCategoryCards: ICardsData | undefined = cardsData.find(
    (cardsDataItem) => Object.keys(cardsDataItem).toString() === categoryPath
  );
  const cards = Object.values(currentCategoryCards!)[0];

  if (currentQuestion) playAudio(audioSRC);

  return (
    <>
      <ul className={classes.categoryField}>
        {cards.map((card, index) => (
          <CardCategoryWrapper
            key={index.toString()}
            giveAnswer={giveAnswer}
            card={card}
          />
        ))}
      </ul>
      {isReadyToStartedGame &&
        (!isStartedGame ? (
          <button type="button" onClick={() => startNewGame(cards)}>
            Start Game
          </button>
        ) : (
          <button type="button" onClick={() => playAudio(audioSRC)}>
            Repeat
          </button>
        ))}
    </>
  );
};

const mapStateToProps = (state: GameAndCardsReducerType) => ({
  cardsData: getCardsData(state.cardsReducer),
  isReadyToStartedGame: getIsReadyToStartedGame(state.gameReducer),
  isStartedGame: getIsStartedGame(state.gameReducer),
  currentQuestion: getCurrentQuestion(state.gameReducer),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  startNewGame: (cards: ICardItem[]) =>
    (dispatch as ThunkDispatch<IGameState, unknown, AnyAction>)(
      prepareGameProcess(cards)
    ),
  giveAnswer: (answer: ICardItem) =>
    (dispatch as ThunkDispatch<IGameState, unknown, AnyAction>)(
      setGivenAnswer(answer)
    ),
});
export default connect(mapStateToProps, mapDispatchToProps)(Category);
