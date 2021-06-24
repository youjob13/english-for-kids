import React, { ReactElement } from 'react';
import classes from './card.module.scss';
import img from '../../../public/assets/category/animals/cat.jpg';
import { ICardProps } from '../../shared/interfaces/api-models';

const Card = ({ title, image }: ICardProps): ReactElement => (
  <li className={classes.card}>
    <img
      className={classes.cardImage}
      src={image} // TODO: remove !
      alt=""
    />
    <p className={classes.cardName}>{title}</p>
  </li>
);

export default Card;
