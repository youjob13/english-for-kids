import React, { ReactElement } from 'react';
import classes from './card.module.scss';
import img from '../../../public/assets/category/animals/cat.jpg';
import { ICardProps } from '../../shared/interfaces/props-models';

// enum CardStyles {
//   CardName = cardName.toUpperCase(),
// }

const Card = ({ title, imageSRC, isStartedGame }: ICardProps): ReactElement => (
  <li
    className={
      isStartedGame ? `${classes.card} ${classes.isStartedGame}` : classes.card
    }
  >
    <img
      className={classes.cardImage}
      src={imageSRC} // TODO: remove !
      alt=""
    />
    <p className={classes.cardName}>{title}</p>
  </li>
);

export default Card;
