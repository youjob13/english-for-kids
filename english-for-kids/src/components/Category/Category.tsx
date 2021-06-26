import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import classes from './category.module.scss';
import { CardsReducerType } from '../../shared/interfaces/store-models';
import { ICategoryProps } from '../../shared/interfaces/props-models';
import CardCategoryWrapper from './CardCategoryWrapper';
import { ICardItem, ICardsData } from '../../shared/interfaces/cards-models';
import { RouteParams } from '../../shared/interfaces/api-models';

const Category = ({ cardsData }: ICategoryProps | any): ReactElement => {
  const { category } = useParams<RouteParams>();

  return (
    <ul className={classes.categoryField}>
      {cardsData
        .find((cards: ICardsData) => cards.category === category)
        .cards.map((card: ICardItem, index: number) => {
          return <CardCategoryWrapper key={index.toString()} card={card} />;
        })}
    </ul>
  );
};

const mapStateToProps = (state: CardsReducerType) => ({
  cardsData: state.cardsReducer.cards,
});

export default connect(mapStateToProps)(Category);
