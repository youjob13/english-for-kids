import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import classes from './mainPage.module.scss';
import CardMainPageWrapper from './CardMainPageWrapper';
import {
  CardsReducerType,
  GameReducerType,
} from '../../shared/interfaces/store-models';
import { ICardItem } from '../../shared/interfaces/cards-models';

const TITLE_STYLES = classes.title;
const CONTENT_STYLES = classes.content;

const MainPage = (): ReactElement => {
  const { cards: cardsData } = useSelector(
    (state: CardsReducerType) => state.cardsReducer
  );
  const { gameMode } = useSelector(
    (state: GameReducerType) => state.gameReducer
  );

  return (
    <>
      <h2 className={TITLE_STYLES}>Train & Play</h2>
      <ul className={CONTENT_STYLES}>
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

export default MainPage;
