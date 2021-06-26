import React, { ReactElement, useState } from 'react';
import { connect } from 'react-redux';
import classes from './category.module.scss';
import Card from '../Card/Card';
import { ICardCategoryWrapperProps } from '../../shared/interfaces/props-models';
import { GameReducerType } from '../../shared/interfaces/store-models';
import playAudio from '../../shared/helpersFunction/playSound';
// TODO: rewrite with hoc
const CardCategoryWrapper = ({
  card,
  isReadyToStartedGame,
}: ICardCategoryWrapperProps): ReactElement => {
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

  return (
    <div className={classes.cardWrapper}>
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
    </div>
  );
};

const mapStateToProps = (state: GameReducerType) => ({
  isReadyToStartedGame: state.gameReducer.isReadyToStartedGame,
});

export default connect(mapStateToProps)(CardCategoryWrapper);
