import React, { ReactElement } from 'react';
import classes from './card.module.scss';
import img from '../../../public/assets/category/animals/cat.jpg';
import { ICardProps } from '../../shared/interfaces/props-models';

// enum CardStyles {
//   CardName = cardName.toUpperCase(),
// }

const trainStyles = `${classes.card} ${classes.isStartedGame}`;
const playStyles = `${classes.card} ${classes}`;

const Card = ({
  title,
  imageSRC,
  isReadyToStartedGame,
}: ICardProps): ReactElement => (
  <li className={isReadyToStartedGame ? trainStyles : playStyles}>
    <img
      className={classes.cardImage}
      src={imageSRC} // TODO: remove !
      alt=""
    />
    <p className={classes.cardName}>{title}</p>
  </li>
);

export default Card;
