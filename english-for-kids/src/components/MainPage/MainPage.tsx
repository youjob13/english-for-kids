import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import classes from './mainPage.module.scss';
import { ICard } from '../../shared/interfaces/cards-models';
import CardCategoryWrapper from './CardCategoryWrapper';

const MainPage = ({ cards }: any): ReactElement => {
  return (
    <>
      <h2 className={classes.title}>Train & Play</h2>
      <ul className={classes.content}>
        {cards.map((card: ICard, index: number) => (
          <CardCategoryWrapper key={index.toString()} card={card} />
        ))}
      </ul>
    </>
  );
};
const mapStateToProps = (state: any) => {
  return {
    cards: state.cardsReducer.cards, // TODO: selectors
  };
};

export default connect(mapStateToProps)(MainPage);
