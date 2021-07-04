import React, { ReactElement } from 'react';
import {
  ENG_GAME_POPUP_IMAGE_STYLES,
  OVERLAY_STYLES,
  TEXT_CONTENT_STYLES,
  TITLE_STYLES,
  WRONGS_STYLES,
} from '../../shared/stylesVariables';
import { IEndGamePopupProps } from '../../shared/interfaces/props-models';
import playAudio from '../../shared/helpersFunction/playSound';

const EndGamePopup = ({ answersList }: IEndGamePopupProps): ReactElement => {
  const wrongAnswersCounts = answersList.reduce(
    (acc, answer) => (!answer ? acc + 1 : acc),
    0
  );

  if (wrongAnswersCounts) {
    playAudio(`/assets/lose.mp3`);
  } else {
    playAudio(`/assets/win.mp3`);
  }

  return (
    <div className={OVERLAY_STYLES}>
      <div className={TEXT_CONTENT_STYLES}>
        <h3 className={TITLE_STYLES}>RESULT</h3>
        <p className={WRONGS_STYLES}>
          {wrongAnswersCounts}
          wrong
        </p>
        <img
          className={ENG_GAME_POPUP_IMAGE_STYLES}
          src={
            wrongAnswersCounts
              ? `${process.env.PUBLIC_URL}/assets/fail.png`
              : `${process.env.PUBLIC_URL}/assets/cool.png`
          }
          alt=""
        />
      </div>
    </div>
  );
};

export default EndGamePopup;
