import React, { ReactElement } from 'react';
import img from '../../../public/assets/category/animals/cat.jpg';
import { ICardProps } from '../../shared/interfaces/props-models';
import capitalizeWord from '../../shared/helperFunctions/capitalizeWord';
import {
  CARD_IMAGE_STYLES,
  CARD_NAME_STYLES,
  PLAY_STYLES,
  TRAIN_STYLES,
} from '../../shared/stylesVariables';

const Card = ({
  title,
  imageSRC,
  isReadyToStartedGame,
}: ICardProps): ReactElement => (
  <div className={isReadyToStartedGame ? PLAY_STYLES : TRAIN_STYLES}>
    <img
      className={CARD_IMAGE_STYLES}
      src={process.env.PUBLIC_URL + imageSRC}
      alt=""
    />
    {title && <p className={CARD_NAME_STYLES}>{capitalizeWord(title)}</p>}
  </div>
);

export default Card;
