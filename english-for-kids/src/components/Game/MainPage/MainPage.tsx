import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import Title from '../../../shared/baseComponents/Title/Title';
import Category from './Category/Category';
import { getWordsState, getGameState } from '../../../store/selectors';
import classes from './mainPage.module.scss';
import Preloader from '../../../shared/baseComponents/Preloader/Preloader';

const MainPage = (): ReactElement => {
  const { cardsData } = useSelector(getWordsState);
  const { gameMode } = useSelector(getGameState);

  return (
    <>
      <Title>Train & Play</Title>
      <ul className={classes.content}>
        {!cardsData.length ? (
          <Preloader />
        ) : (
          cardsData.map(({ category, words, _id }) => (
            <Category
              key={_id}
              category={category}
              words={words}
              gameMode={gameMode}
            />
          ))
        )}
      </ul>
    </>
  );
};

export default MainPage;
