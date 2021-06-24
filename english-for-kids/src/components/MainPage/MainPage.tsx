import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import classes from './mainPage.module.scss';
import { ICard } from '../../shared/interfaces/cards-models';
import CardCategoryWrapper from './CardCategoryWrapper';
import { CardsReducerType } from '../../shared/interfaces/store-models';
import { IMainPageProps } from '../../shared/interfaces/api-models';

const MainPage = ({ cards }: IMainPageProps): ReactElement => {
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
const mapStateToProps = (state: CardsReducerType) => {
  return {
    cards: state.cardsReducer.cards, // TODO: selectors
  };
};

export default connect(mapStateToProps)(MainPage);
