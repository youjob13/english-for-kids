import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Dispatch } from 'redux';
import classes from './category.module.scss';
import {
  GameAndCardsReducerType,
  GameReducerType,
  StateType,
  ThunkDispatchType,
} from '../../shared/interfaces/store-models';
import { GameMode, ICategoryProps } from '../../shared/interfaces/props-models';
import CardCategoryWrapper from './CardCategoryWrapper';
import { ICardItem, ICardsData } from '../../shared/interfaces/cards-models';
import { RouteParams } from '../../shared/interfaces/api-models';
import { prepareGameProcess, setGivenAnswer } from '../../store/gameSlice';
import playAudio from '../../shared/helpersFunction/playSound';
import {
  getCurrentQuestion,
  getGameModeStatus,
} from '../../store/gameSelectors';
import getCardsData from '../../store/cardsSelectors';

const defineCurrentCategoryCards = (
  cardsData: ICardsData[],
  categoryPath: string
): ICardsData | undefined => {
  return cardsData.find(
    (cardsDataItem) => Object.keys(cardsDataItem).toString() === categoryPath
  );
};

const Category = ({
  cardsData,
  startNewGame,
  currentQuestion,
  giveAnswer,
  gameMode,
}: ICategoryProps): ReactElement => {
  const { category: categoryPath } = useParams<RouteParams>();
  const { audioSRC }: ICardItem = currentQuestion! || '';

  const currentCategoryCards: ICardsData | undefined =
    defineCurrentCategoryCards(cardsData, categoryPath);

  const cards = Object.values(currentCategoryCards!)[0];

  if (currentQuestion) playAudio(audioSRC); // TODO: try move in CardCategoryWrapper

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
      {gameMode === GameMode.READY_TO_GAME && (
        <button type="button" onClick={() => startNewGame(cards)}>
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

const mapStateToProps = (state: GameAndCardsReducerType) => ({
  cardsData: getCardsData(state.cardsReducer),
  currentQuestion: getCurrentQuestion(state.gameReducer),
  gameMode: getGameModeStatus(state.gameReducer),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  startNewGame: (cards: ICardItem[]) =>
    (dispatch as ThunkDispatchType<StateType<GameReducerType>>)(
      prepareGameProcess(cards)
    ),
  giveAnswer: (answer: ICardItem) =>
    (dispatch as ThunkDispatchType<StateType<GameReducerType>>)(
      setGivenAnswer(answer)
    ),
});
export default connect(mapStateToProps, mapDispatchToProps)(Category);
