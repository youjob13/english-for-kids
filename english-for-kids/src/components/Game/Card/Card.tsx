import React, { ReactElement } from 'react';
import { ICardProps } from '../../../shared/interfaces/props-models';
import {
  CARD_IMAGE_STYLES,
  CARD_NAME_STYLES,
  PLAY_STYLES,
  TRAIN_STYLES,
} from '../../../shared/stylesVariables';
import capitalizeWord from '../../../shared/helperFunctions/capitalizeWord';

const Card = ({
  title,
  imageSRC,
  isReadyToStartedGame,
}: ICardProps): ReactElement => (
  <div className={isReadyToStartedGame ? PLAY_STYLES : TRAIN_STYLES}>
    <img className={CARD_IMAGE_STYLES} src={imageSRC} alt="" />
    {title && <p className={CARD_NAME_STYLES}>{capitalizeWord(title)}</p>}
  </div>
);

export default Card;
