import React, { ReactElement } from 'react';
import {
  ElemRole,
  GameMode,
  ImageDescription,
} from '../../../../../shared/globalVariables';
import rotateArrowsImg from '../../../../../assets/images/rotate-arrows.png';
import speakerImg from '../../../../../assets/images/speaker.png';
import { ICardFrontControlsProps } from '../../../../../shared/interfaces/props-models';
import classes from '../../../CategoryPage/category.module.scss';

const CardFrontControls = ({
  playCardAudio,
  showTranslation,
  gameMode,
}: ICardFrontControlsProps): ReactElement => {
  return (
    <>
      {gameMode === GameMode.NO_GAME && (
        <>
          <button
            type={ElemRole.BUTTON}
            className={classes.translationBtn}
            onClick={showTranslation}
          >
            <img
              className={classes.buttonImages}
              src={rotateArrowsImg}
              alt={ImageDescription.ARROWS}
            />
          </button>
          <button
            type={ElemRole.BUTTON}
            className={classes.playSoundBtn}
            onClick={playCardAudio}
          >
            <img
              className={classes.buttonImages}
              src={speakerImg}
              alt={ImageDescription.SPEAKER}
            />
          </button>
        </>
      )}
    </>
  );
};

export default CardFrontControls;
