import React, { ReactElement } from 'react';
import Card from '../../../../Card/Card';
import { ICardFrontProps } from '../../../../../../shared/interfaces/props-models';
import speakerImg from '../../../../../../assets/images/speaker.png';
import rotateArrowsImg from '../../../../../../assets/images/rotate-arrows.png';
import {
  BUTTON_IMAGES_STYLES,
  PLAY_SOUND_BTN_STYLES,
  TRANSLATION_BTN_STYLES,
} from '../../../../../../shared/stylesVariables';
import { ElemRole, GameMode } from '../../../../../../shared/globalVariables';

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
    {gameMode === GameMode.NO_GAME && (
      <>
        <button
          type={ElemRole.BUTTON}
          className={TRANSLATION_BTN_STYLES}
          onClick={showTranslation}
        >
          <img
            className={BUTTON_IMAGES_STYLES}
            src={rotateArrowsImg}
            alt="rotate arrows"
          />
        </button>
        <button
          type={ElemRole.BUTTON}
          className={PLAY_SOUND_BTN_STYLES}
          onClick={playCardAudio}
        >
          <img
            className={BUTTON_IMAGES_STYLES}
            src={speakerImg}
            alt="speaker"
          />
        </button>
      </>
    )}
  </>
);

export default CardFront;
