import React, { ReactElement, useState } from 'react';
import { connect } from 'react-redux';
import classes from './category.module.scss';
import Card from '../Card/Card';
import { ICardCategoryWrapperProps } from '../../shared/interfaces/props-models';
import { GameReducerType } from '../../shared/interfaces/store-models';
// TODO: rewrite with hoc
const CardCategoryWrapper = ({
  card,
  isStartedGame,
}: ICardCategoryWrapperProps): ReactElement => {
  const [isShowTranslation, setIsShowTranslation] = useState(false);
  const { name, translate, imageSRC, audioSRC } = card;

  const playCardAudio = () => {
    setIsShowTranslation(!isShowTranslation);
    if (!isShowTranslation) {
      const audio = new Audio(card.audioSRC);
      audio.play();
      audio.remove();
    }
  };

  return (
    <a href="##" onClick={playCardAudio}>
      <div className={classes.cardWrapper}>
        <p
          className={
            isShowTranslation
              ? `${classes.translation} ${classes.translationActive}`
              : classes.translation
          }
        >
          {translate}
          {audioSRC}
        </p>
        <Card
          title={isStartedGame ? name : ''}
          isStartedGame={isStartedGame}
          imageSRC={imageSRC}
        />
      </div>
    </a>
  );
};

const mapStateToProps = (state: GameReducerType) => ({
  isStartedGame: state.gameReducer.isStartedGame,
});

export default connect(mapStateToProps)(CardCategoryWrapper);
