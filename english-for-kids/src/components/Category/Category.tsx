import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import classes from './category.module.scss';
import Card from '../Card/Card';
import { ICategoryProps } from '../../shared/interfaces/api-models';
import { CardsReducerType } from '../../shared/interfaces/store-models';

const Category = ({ selectedCategory }: ICategoryProps): ReactElement => {
  const { cards = [], category } = selectedCategory;

  return (
    <>
      <ul className={classes.categoryField}>
        {cards.map((card: string, index: number) => (
          <Card key={index.toString()} title={category} image={card} />
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = (state: CardsReducerType) => ({
  selectedCategory: state.cardsReducer.selectedCategory,
});

export default connect(mapStateToProps)(Category);
