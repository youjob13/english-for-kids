import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import Title from '../../../shared/baseComponents/Title/Title';
import CardWrapperOnMainPage from './CardWrapperOnMainPage/CardWrapperOnMainPage';
import { getWordsState, getGameState } from '../../../shared/selectors';
import classes from './mainPage.module.scss';

const MainPage = (): ReactElement => {
  const { cardsData } = useSelector(getWordsState);
  const { gameMode } = useSelector(getGameState);

  // const lastCategoryElem = usePaginate();

  return (
    <>
      <Title>Train & Play</Title>
      <ul className={classes.content}>
        {cardsData.map(({ category, words, _id }) => (
          <CardWrapperOnMainPage
            key={_id}
            category={category}
            words={words}
            gameMode={gameMode}
          />
        ))}
      </ul>
    </>
  );
};

export default MainPage;
