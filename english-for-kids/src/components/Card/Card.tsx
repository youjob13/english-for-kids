import React, { ReactElement } from 'react';
import classes from './card.module.scss';
import img from '../../../public/assets/category/animals/cat.jpg';

export interface ICard {
  card: { category: string; items: string[] };
}

const Card = ({ card }: ICard): ReactElement => {
  return (
    <div className={classes.card}>
      <img className={classes.cardImage} src={card.items[0]} alt="" />
      <p className={classes.cardName}>{card.category}</p>
    </div>
  );
};

export default Card;
