import React, { ReactElement } from 'react';
import classes from './card.module.scss';
import img from '../../../public/assets/category/animals/cat.jpg';
import { ICardProps } from '../../shared/interfaces/props-models';

const TRAIN_STYLES = `${classes.card} ${classes.isStartedGame}`;
const PLAY_STYLES = `${classes.card} ${classes}`;
const CARD_IMAGE_STYLES = classes.cardImage;
const CARD_NAME_STYLES = classes.cardName;

const Card = ({
  title,
  imageSRC,
  isReadyToStartedGame,
}: ICardProps): ReactElement => (
  <li className={isReadyToStartedGame ? PLAY_STYLES : TRAIN_STYLES}>
    <img
      className={CARD_IMAGE_STYLES}
      src={process.env.PUBLIC_URL + imageSRC}
      alt=""
    />
    <p className={CARD_NAME_STYLES}>{title}</p>
  </li>
);

export default Card;
