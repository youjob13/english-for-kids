import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CardsReducerType,
  GameReducerType,
} from '../../../shared/interfaces/store-models';
import Title from '../../../shared/baseComponents/Title/Title';
import { CONTENT_STYLES } from '../../../shared/stylesVariables';
import CardWrapperOnMainPage from './CardWrapperOnMainPage/CardWrapperOnMainPage';
import usePaginate from '../../../shared/hooks/usePaginate';
import { nullifyCards } from '../../../store/cardsSlice';

const MainPage = (): ReactElement => {
  const dispatch = useDispatch();
  const { cardsData } = useSelector(
    (state: CardsReducerType) => state.cardsReducer
  );
  const { gameMode } = useSelector(
    (state: GameReducerType) => state.gameReducer
  );

  useEffect(() => {
    dispatch(nullifyCards());
  }, []);

  const lastCategoryElem = usePaginate();

  return (
    <>
      <Title>Train & Play</Title>
      <ul className={CONTENT_STYLES}>
        {cardsData.map(({ category, cards, _id }, index, categories) =>
          categories.length === index + 1 ? (
            <div key={_id} ref={lastCategoryElem}>
              <CardWrapperOnMainPage
                key={_id}
                category={category}
                cards={cards}
                gameMode={gameMode}
              />
            </div>
          ) : (
            <CardWrapperOnMainPage
              key={_id}
              category={category}
              cards={cards}
              gameMode={gameMode}
            />
          )
        )}
      </ul>
    </>
  );
};

export default MainPage;
