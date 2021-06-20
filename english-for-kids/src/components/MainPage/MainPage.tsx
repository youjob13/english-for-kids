import React, { ReactElement } from 'react';
import classes from './mainPage.module.scss';
import Card from '../Card/Card';
import withNavigation from '../../hoc/withNavigation';
import cardsData from '../../cards.json';

const MainPage = (): ReactElement => {
  return (
    <>
      <h2 className={classes.title}>Train & Play</h2>
      <ul className={classes.content}>
        {cardsData.map((card) => withNavigation(<Card card={card} />))}
      </ul>
    </>
  );
};

export default MainPage;
