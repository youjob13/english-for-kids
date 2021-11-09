import React, { ReactElement, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { IEndGamePopupProps } from '../../../shared/interfaces/props-models';
import playAudio from '../../../shared/helperFunctions/playSound';
import Popup from '../Popup';
import classes from './endGamePopup.module.scss';
import {
  EMPTY_LINE,
  LOSE_POPUP_IMAGE,
  LOSE_POPUP_SOUND,
  Path,
  WIN_POPUP_IMAGE,
  WIN_POPUP_SOUND,
} from '../../../shared/globalVariables';

const EndGamePopup = ({ answerList }: IEndGamePopupProps): ReactElement => {
  const history = useHistory();

  const wrongAnswerCounts = answerList.reduce(
    (acc, answer) => (!answer ? acc + 1 : acc),
    0
  );

  useEffect(() => {
    return function redirect() {
      history.push(Path.ROOT);
    };
  });

  if (wrongAnswerCounts) {
    playAudio(LOSE_POPUP_SOUND);
  } else {
    playAudio(WIN_POPUP_SOUND);
  }

  const image = wrongAnswerCounts ? LOSE_POPUP_IMAGE : WIN_POPUP_IMAGE;

  return (
    <Popup>
      <h3 className={classes.title}>RESULT</h3>
      <p className={classes.wrong}>
        {wrongAnswerCounts}
        wrong
      </p>
      <img className={classes.image} src={image} alt={EMPTY_LINE} />
    </Popup>
  );
};

export default EndGamePopup;
