import React, { ReactElement } from 'react';
import classes from './card.module.scss';
import img from '../../../public/assets/category/animals/cat.jpg';
import { ICard } from '../../shared/interfaces/cards-models';

const Card = ({ card }: ICard): ReactElement => {
  return (
    <div className={classes.card}>
      <img
        className={classes.cardImage}
        src={Object.values(card)[0]![0]}
        alt=""
      />
      <p className={classes.cardName}>{Object.keys(card)}</p>
    </div>
  );
};

export default Card;
