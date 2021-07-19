import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import classes from './card.module.scss';
import { ICardAdminFront } from '../../../../shared/interfaces/props-models';
import { removeCard } from '../../../../store/cardsSlice';
import playSound from '../../../../shared/helperFunctions/playSound';
import hideTextPart from '../../../../shared/helperFunctions/hideTextPart';
import speakerImage from '../../../../assets/images/speaker.png';

const CardFront = ({
  categoryId,
  _id,
  name,
  translate,
  audioSRC,
  imageSRC,
  toggleEditMode,
}: ICardAdminFront): ReactElement => {
  const audio = (audioSRC && audioSRC.match(/\w+.mp3$/)) || 'Text lost';

  const dispatch = useDispatch();
  const flipCardToBack = () => {
    toggleEditMode(true);
  };

  const onRemoveCardClick = () => {
    dispatch(removeCard(_id, categoryId.toString()));
  };

  const onSoundPlayButtonClick = () => {
    playSound(audioSRC);
  };

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
          type="button"
        >
          <img
            className={classes.cardAdminSoundButtonImage}
            src={speakerImage}
            alt="speaker"
          />
        </button>
        <p>{hideTextPart(audio.toString(), 6)}mp3</p>
      </span>
      <span className={classes.cardAdminContent}>
        <h5>Image:</h5>
        <div className={classes.cardAdminImage}>
          <img src={imageSRC} alt="" />
        </div>
      </span>
      <div className={classes.cardAdminButtons}>
        <button
          onClick={onRemoveCardClick}
          className={`${classes.cardAdminButton} ${classes.removeButton}`}
          type="button"
        >
          Remove
        </button>
        <button
          onClick={flipCardToBack}
          className={classes.cardAdminButton}
          type="button"
        >
          Change
        </button>
      </div>
    </div>
  );
};

export default CardFront;
