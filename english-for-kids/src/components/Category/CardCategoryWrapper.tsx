import React, { ReactElement, useState } from 'react';
import { connect } from 'react-redux';
import classes from './category.module.scss';
import Card from '../Card/Card';
import { ICardCategoryWrapperProps } from '../../shared/interfaces/props-models';
import { GameReducerType } from '../../shared/interfaces/store-models';
import playAudio from '../../shared/helpersFunction/playSound';
import {
  getIsReadyToStartedGame,
  getIsStartedGame,
} from '../../store/gameSelectors';
// TODO: rewrite with hoc
const CardCategoryWrapper = ({
  card,
  isReadyToStartedGame,
  giveAnswer,
  isStartedGame,
}: ICardCategoryWrapperProps | any): ReactElement => {
  const [isShowTranslation, setIsShowTranslation] = useState(false);
  const { name, translate, imageSRC, audioSRC } = card;

  const showTranslation = () => {
    if (isReadyToStartedGame) return;
    setIsShowTranslation(!isShowTranslation);
  };

  const playCardAudio = () => {
    if (isReadyToStartedGame) return;
    playAudio(audioSRC);
  };

  const onCardClick = () => {
    if (isStartedGame) giveAnswer(card);
  };

  return (
    <a href="##" onClick={onCardClick} className={classes.cardWrapper}>
      <p
        className={
          isShowTranslation
            ? `${classes.translation} ${classes.translationActive}`
            : classes.translation
        }
      >
        {translate}
      </p>
      {!isReadyToStartedGame && (
        <>
          <button
            type="button"
            className={classes.translationBtn}
            onClick={showTranslation}
          >
            translate
          </button>
          <button
            type="button"
            className={classes.playSoundBtn}
            onClick={playCardAudio}
          >
            play sound
          </button>
        </>
      )}
      <Card
        title={isReadyToStartedGame ? '' : name}
        isReadyToStartedGame={isReadyToStartedGame}
        imageSRC={imageSRC}
      />
    </a>
  );
};

const mapStateToProps = (state: GameReducerType) => ({
  isReadyToStartedGame: getIsReadyToStartedGame(state.gameReducer),
  isStartedGame: getIsStartedGame(state.gameReducer),
});

export default connect(mapStateToProps)(CardCategoryWrapper);
