import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import classes from './category.module.scss';
import Card from '../Card/Card';
import { ICard } from '../../shared/interfaces/cards-models';

const Category = (props: any): ReactElement => {
  const { selectedCategory } = props;
  const { cards = [], category } = selectedCategory;

  return (
    <>
      <ul className={classes.categoryField}>
        {cards.map((card: ICard, index: number) => (
          <Card key={index.toString()} title={category} image={card} />
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  selectedCategory: state.cardsReducer.selectedCategory,
});

export default connect(mapStateToProps)(Category);
