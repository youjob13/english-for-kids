import React, { ReactElement } from 'react';
import Card from '../Card';
import { ICardFrontProps } from '../../../../shared/interfaces/props-models';
import { GameMode } from '../../../../shared/globalVariables';
import CardFrontControls from './CardFrontControls/CardFrontControls';

const CardFront = ({
  title,
  imageSRC,
  playCardAudio,
  showTranslation,
  gameMode,
}: ICardFrontProps): ReactElement => (
  <>
    <Card
      title={title}
      isReadyToStartedGame={gameMode === GameMode.READY_TO_GAME}
      imageSRC={imageSRC}
    />
    <CardFrontControls
      gameMode={gameMode}
      playCardAudio={playCardAudio}
      showTranslation={showTranslation}
    />
  </>
);

export default CardFront;
