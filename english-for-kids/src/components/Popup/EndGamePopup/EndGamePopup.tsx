import React, { ReactElement, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  END_GAME_POPUP_TITLE_STYLES,
  ENG_GAME_POPUP_IMAGE_STYLES,
  WRONGS_STYLES,
} from '../../../shared/stylesVariables';
import { IEndGamePopupProps } from '../../../shared/interfaces/props-models';
import playAudio from '../../../shared/helperFunctions/playSound';
import Popup from '../Popup';

const EndGamePopup = ({ answerList }: IEndGamePopupProps): ReactElement => {
  const history = useHistory();

  const wrongAnswerCounts = answerList.reduce(
    (acc, answer) => (!answer ? acc + 1 : acc),
    0
  );

  useEffect(() => {
    return function redirect() {
      history.push('/main');
    };
  });

  if (wrongAnswerCounts) {
    playAudio(`/assets/lose.mp3`);
  } else {
    playAudio(`/assets/win.mp3`);
  }

  return (
    <Popup>
      <h3 className={END_GAME_POPUP_TITLE_STYLES}>RESULT</h3>
      <p className={WRONGS_STYLES}>
        {wrongAnswerCounts}
        wrong
      </p>
      <img
        className={ENG_GAME_POPUP_IMAGE_STYLES}
        src={
          wrongAnswerCounts
            ? `${process.env.PUBLIC_URL}/assets/fail.png`
            : `${process.env.PUBLIC_URL}/assets/cool.png`
        }
        alt=""
      />
    </Popup>
  );
};

export default EndGamePopup;
