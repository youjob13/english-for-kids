import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Title from '../../../shared/baseComponents/Title/Title';
import Category from './Category/Category';
import { getWordsState, getGameState } from '../../../store/selectors';
import classes from './mainPage.module.scss';
import Preloader from '../../../shared/baseComponents/Preloader/Preloader';
import { LocalesKey } from '../../../shared/globalVariables';

const MainPage = (): ReactElement => {
  const { cardsData } = useSelector(getWordsState);
  const { gameMode } = useSelector(getGameState);
  const { t } = useTranslation();

  return (
    <>
      <Title>{t(LocalesKey.MAIN_TITLE)}</Title>
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
