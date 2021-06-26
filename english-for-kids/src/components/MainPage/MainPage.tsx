import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import classes from './mainPage.module.scss';
import CardMainPageWrapper from './CardMainPageWrapper';
import { CardsReducerType } from '../../shared/interfaces/store-models';
import { IMainPageProps } from '../../shared/interfaces/props-models';

const MainPage = ({ cards }: IMainPageProps): ReactElement => {
  return (
    <>
      <h2 className={classes.title}>Train & Play</h2>
      <ul className={classes.content}>
        {cards.map((card: any, index: number) => (
          <CardMainPageWrapper
            key={index.toString()}
            category={Object.keys(card).toString()}
            cards={Object.values(card)[0]}
          />
        ))}
      </ul>
    </>
  );
};
const mapStateToProps = (state: CardsReducerType) => ({
  cards: state.cardsReducer.cards, // TODO: selectors
});

export default connect(mapStateToProps)(MainPage);
