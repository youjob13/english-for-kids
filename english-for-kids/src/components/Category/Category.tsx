import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import classes from './category.module.scss';
import { CardsReducerType } from '../../shared/interfaces/store-models';
import { ICategoryProps } from '../../shared/interfaces/props-models';
import CardCategoryWrapper from './CardCategoryWrapper';
import { ICardsData } from '../../shared/interfaces/cards-models';
import { RouteParams } from '../../shared/interfaces/api-models';

const Category = ({ cardsData }: ICategoryProps): ReactElement => {
  const { category: categoryPath } = useParams<RouteParams>();

  const currentCategoryCards: ICardsData | undefined = cardsData.find(
    (cards) => Object.keys(cards).toString() === categoryPath
  );

  return (
    <ul className={classes.categoryField}>
      {Object.values(currentCategoryCards!)[0].map((card, index) => (
        <CardCategoryWrapper key={index.toString()} card={card} />
      ))}
    </ul>
  );
};

const mapStateToProps = (state: CardsReducerType) => ({
  cardsData: state.cardsReducer.cards,
});

export default connect(mapStateToProps)(Category);
