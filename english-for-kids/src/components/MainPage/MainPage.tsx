import React, { ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import classes from './mainPage.module.scss';
import CardMainPageWrapper from './CardMainPageWrapper';
import {
  GameAndCardsReducerType,
  ICardsState,
  ThunkDispatchType,
} from '../../shared/interfaces/store-models';
import { IMainPageProps } from '../../shared/interfaces/props-models';
import { ICardItem } from '../../shared/interfaces/cards-models';
import getCardsData from '../../store/cardsSelectors';
import { getGameModeStatus } from '../../store/gameSelectors';
import { getAllCards } from '../../store/cardsSlice';

const MainPage = ({
  cardsData,
  gameMode,
  getCards,
}: IMainPageProps): ReactElement => {
  useEffect(() => {
    getCards();
  }, []);

  return (
    <>
      <h2 className={classes.title}>Train & Play</h2>
      <ul className={classes.content}>
        {cardsData.map((cardsDataItem, index) => {
          const category = Object.keys(cardsDataItem).toString();
          const cards: ICardItem[] = Object.values(cardsDataItem)[0];
          return (
            // TODO: remove CardMainPageWrapper
            <CardMainPageWrapper
              key={index.toString()}
              category={category}
              cards={cards}
              gameMode={gameMode}
            />
          );
        })}
      </ul>
    </>
  );
};
const mapStateToProps = (state: GameAndCardsReducerType) => ({
  cardsData: getCardsData(state.cardsReducer),
  gameMode: getGameModeStatus(state.gameReducer),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getCards: () => (dispatch as ThunkDispatchType<ICardsState>)(getAllCards()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
