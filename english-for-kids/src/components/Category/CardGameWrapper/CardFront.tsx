import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import Card from '../../Card/Card';
import {
  GameMode,
  ICardFrontProps,
} from '../../../shared/interfaces/props-models';
import { GameReducerType } from '../../../shared/interfaces/store-models';
import speakerImg from '../../../assets/images/speaker.png';
import rotateArrowsImg from '../../../assets/images/rotate-arrows.png';
import {
  BUTTON_IMAGES_STYLES,
  PLAY_SOUND_BTN_STYLES,
  TRANSLATION_BTN_STYLES,
} from '../../../shared/stylesVariables';

const CardFront = ({
  title,
  imageSRC,
  isReadyToStartedGame,
  playCardAudio,
  showTranslation,
}: ICardFrontProps): ReactElement => {
  const { gameMode } = useSelector(
    (state: GameReducerType) => state.gameReducer
  );

  return (
    <>
      <Card
        title={title}
        isReadyToStartedGame={isReadyToStartedGame}
        imageSRC={imageSRC}
      />
      {gameMode === GameMode.NO_GAME && (
        <>
          <button
            type="button"
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
            type="button"
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
};

export default CardFront;
