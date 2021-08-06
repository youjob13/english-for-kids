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

export const ADMIN_WORD_FRONT = classes.cardAdminFront; // TODO: убрать константы для стилей
export const ADMIN_WORD_CONTENT = classes.cardAdminContent;
export const ADMIN_WORD_SOUND_BUTTON = classes.cardAdminSoundButton;
export const ADMIN_WORD_SOUND_ICON = classes.cardAdminSoundButtonImage;
export const ADMIN_WORD_IMAGE_PREVIEW = classes.cardAdminImage;
export const ADMIN_WORD_BUTTONS_WRAPPER = classes.cardAdminButtons;
export const ADMIN_WORD_REMOVE = `${classes.cardAdminButton} ${classes.removeButton}`;
export const ADMIN_WORD_BUTTON = `${classes.cardAdminButton}`;

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

  return (
    <div className={ADMIN_WORD_FRONT}>
      <span className={ADMIN_WORD_CONTENT}>
        <h5>Word:</h5> <p>{name}</p>
      </span>
      <span className={ADMIN_WORD_CONTENT}>
        <h5>Translation:</h5> <p>{translate}</p>
      </span>
      <span className={ADMIN_WORD_CONTENT}>
        <h5>Sound file:</h5>
        <button
          className={ADMIN_WORD_SOUND_BUTTON}
          onClick={onSoundPlayButtonClick}
          type={ElemRole.BUTTON}
        >
          <img
            src={speakerImage}
            className={ADMIN_WORD_SOUND_ICON}
            alt={ImageDescription.SPEAKER}
          />
        </button>
        <p>{hideTextPart(audio, SIX_CHARACTERS)}mp3</p>
      </span>
      <span className={ADMIN_WORD_CONTENT}>
        <h5>Image:</h5>
        <div className={ADMIN_WORD_IMAGE_PREVIEW}>
          <img src={imageSRC} alt={EMPTY_LINE} />
        </div>
      </span>
      <div className={ADMIN_WORD_BUTTONS_WRAPPER}>
        <button
          onClick={onRemoveCardClick}
          className={ADMIN_WORD_REMOVE}
          type={ElemRole.BUTTON}
        >
          Remove
        </button>
        <button
          onClick={flipCardToBack}
          className={ADMIN_WORD_BUTTON}
          type={ElemRole.BUTTON}
        >
          Change
        </button>
      </div>
    </div>
  );
};

export default WordCardFront;
