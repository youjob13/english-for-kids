import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import classes from './category.module.scss';
import { CardsReducerType } from '../../shared/interfaces/store-models';
import { ICategoryProps } from '../../shared/interfaces/props-models';
import CardCategoryWrapper from './CardCategoryWrapper';

const Category = ({ selectedCategory }: ICategoryProps): ReactElement => {
  const { cards } = selectedCategory;

  return (
    <ul className={classes.categoryField}>
      {cards.map((card, index) => (
        <CardCategoryWrapper key={index.toString()} card={card} />
      ))}
    </ul>
  );
};

const mapStateToProps = (state: CardsReducerType) => ({
  selectedCategory: state.cardsReducer.selectedCategory,
});

export default connect(mapStateToProps)(Category);
