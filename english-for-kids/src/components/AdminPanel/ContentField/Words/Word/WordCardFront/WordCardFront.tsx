import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import classes from '../card.module.scss';
import { ICardAdminFront } from '../../../../../../shared/interfaces/props-models';
import { removeWord } from '../../../../../../store/cardsSlice';
import playSound from '../../../../../../shared/helperFunctions/playSound';
import hideTextPart from '../../../../../../shared/helperFunctions/hideTextPart';
import speakerImage from '../../../../../../assets/images/speaker.png';
import { logoutUser } from '../../../../../../store/authSlice';
import {
  AUDIO_IS_MISSING,
  ElemRole,
  EMPTY_LINE,
  ImageDescription,
  Path,
  SIX_CHARACTERS,
} from '../../../../../../shared/globalVariables';

const WordCardFront = ({
  categoryId,
  _id,
  name,
  translate,
  audioSRC,
  imageSRC,
  toggleEditMode,
}: ICardAdminFront): ReactElement => {
  const dispatch = useDispatch();
  const history = useHistory();
  const audio = (audioSRC && audioSRC.match(/\w+.mp3$/)) || AUDIO_IS_MISSING;

  const flipCardToBack = () => {
    toggleEditMode(true);
  };

  const onRemoveCardClick = () => {
    if (localStorage.token) {
      dispatch(removeWord(_id, categoryId));
    } else {
      history.push(Path.ROOT);
      dispatch(logoutUser());
    }
  };

  const onSoundPlayButtonClick = () => {
    playSound(audioSRC);
  };

  const REMOVE_BUTTON_STYLES = `${classes.cardAdminButton} ${classes.removeButton}`;
  const CHANGE_BUTTON_STYLES = `${classes.cardAdminButton}`;

  return (
    <div className={classes.cardAdminFront}>
      <span className={classes.cardAdminContent}>
        <h5>Word:</h5> <p>{name}</p>
      </span>
      <span className={classes.cardAdminContent}>
        <h5>Translation:</h5> <p>{translate}</p>
      </span>
      <span className={classes.cardAdminContent}>
        <h5>Sound file:</h5>
        <button
          className={classes.cardAdminSoundButton}
          onClick={onSoundPlayButtonClick}
          type={ElemRole.BUTTON}
        >
          <img
            src={speakerImage}
            className={classes.cardAdminSoundButtonImage}
            alt={ImageDescription.SPEAKER}
          />
        </button>
        <p>{hideTextPart(audio, SIX_CHARACTERS)}mp3</p>
      </span>
      <span className={classes.cardAdminContent}>
        <h5>Image:</h5>
        <div className={classes.cardAdminImage}>
          <img src={imageSRC} alt={EMPTY_LINE} />
        </div>
      </span>
      <div className={classes.cardAdminButtons}>
        <button
          onClick={onRemoveCardClick}
          className={REMOVE_BUTTON_STYLES}
          type={ElemRole.BUTTON}
        >
          Remove
        </button>
        <button
          onClick={flipCardToBack}
          className={CHANGE_BUTTON_STYLES}
          type={ElemRole.BUTTON}
        >
          Change
        </button>
      </div>
    </div>
  );
};

export default WordCardFront;
