import React, { ReactElement } from 'react';
import { ICardProps } from '../../../shared/interfaces/props-models';
import { EMPTY_LINE } from '../../../shared/globalVariables';
import classes from './card.module.scss';

const Card = ({
  title,
  imageSRC,
  isReadyToStartedGame,
}: ICardProps): ReactElement => {
  const cardStyle = isReadyToStartedGame
    ? classes.card
    : `${classes.card} ${classes.isStartedGame}`;

  return (
    <div className={cardStyle}>
      <img className={classes.cardImage} src={imageSRC} alt={EMPTY_LINE} />
      <p className={classes.cardName}>{title}</p>
    </div>
  );
};

export default Card;
