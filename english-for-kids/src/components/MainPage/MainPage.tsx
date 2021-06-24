import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import classes from './mainPage.module.scss';
import { ICardsData } from '../../shared/interfaces/cards-models';
import CardCategoryWrapper from './CardMainPageWrapper';
import { CardsReducerType } from '../../shared/interfaces/store-models';
import { IMainPageProps } from '../../shared/interfaces/props-models';

const MainPage = ({ cards }: IMainPageProps): ReactElement => {
  return (
    <>
      <h2 className={classes.title}>Train & Play</h2>
      <ul className={classes.content}>
        {cards.map((card: ICardsData, index: number) => (
          <CardCategoryWrapper key={index.toString()} card={card} />
        ))}
      </ul>
    </>
  );
};
const mapStateToProps = (state: CardsReducerType) => {
  return {
    cards: state.cardsReducer.cards, // TODO: selectors
  };
};

export default connect(mapStateToProps)(MainPage);
