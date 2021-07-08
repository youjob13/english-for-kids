import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import {
  CardsReducerType,
  GameReducerType,
} from '../../shared/interfaces/store-models';
import Title from '../../shared/baseComponents/Title/Title';
import { CONTENT_STYLES } from '../../shared/stylesVariables';
import { FIRST_ELEMENT } from '../../shared/globalVariables';
import CardWrapperOnMainPage from './CardWrapperOnMainPage/CardWrapperOnMainPage';

const MainPage = (): ReactElement => {
  const { cardsData } = useSelector(
    (state: CardsReducerType) => state.cardsReducer
  );
  const { gameMode } = useSelector(
    (state: GameReducerType) => state.gameReducer
  );

  return (
    <>
      <Title>Train & Play</Title>
      <ul className={CONTENT_STYLES}>
        {cardsData.map((cardData, index) => {
          const category = Object.keys(cardData).toString();
          const cards = Object.values(cardData)[FIRST_ELEMENT];

          return (
            <CardWrapperOnMainPage
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
