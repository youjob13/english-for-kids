import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import classes from './mainPage.module.scss';
import CardMainPageWrapper from './CardMainPageWrapper';
import { GameAndCardsReducerType } from '../../shared/interfaces/store-models';
import { IMainPageProps } from '../../shared/interfaces/props-models';
import { ICardItem } from '../../shared/interfaces/cards-models';
import getCardsData from '../../store/cardsSelectors';
import { getGameModeStatus } from '../../store/gameSelectors';

const MainPage = ({ cardsData, gameMode }: IMainPageProps): ReactElement => {
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

export default connect(mapStateToProps)(MainPage);
