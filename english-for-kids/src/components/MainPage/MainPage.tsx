import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import CardMainPageWrapper from './CardMainPageWrapper';
import {
  CardsReducerType,
  GameReducerType,
} from '../../shared/interfaces/store-models';
import { ICardItem } from '../../shared/interfaces/cards-models';
import Title from '../../shared/baseComponents/Title/Title';
import { CONTENT_STYLES } from '../../shared/stylesVariables';

const MainPage = (): ReactElement => {
  const { cards: cardsData } = useSelector(
    (state: CardsReducerType) => state.cardsReducer
  );
  const { gameMode } = useSelector(
    (state: GameReducerType) => state.gameReducer
  );

  return (
    <>
      <Title>Train & Play</Title>
      <ul className={CONTENT_STYLES}>
        {cardsData.map((cardsDataItem, index) => {
          const category = Object.keys(cardsDataItem).toString();
          const cards: ICardItem[] = Object.values(cardsDataItem)[0];

          return (
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
