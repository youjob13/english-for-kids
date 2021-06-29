import React, { ReactElement, useState } from 'react';
import { connect } from 'react-redux';
import classes from './category.module.scss';
import Card from '../Card/Card';
import {
  GameMode,
  ICardCategoryWrapperProps,
} from '../../shared/interfaces/props-models';
import { GameReducerType } from '../../shared/interfaces/store-models';
import playAudio from '../../shared/helpersFunction/playSound';
import { getGameModeStatus } from '../../store/gameSelectors';
import { ICardItem } from '../../shared/interfaces/cards-models';

const checkIsGuessedCard = (
  currentGameCardList: ICardItem[],
  card: ICardItem
): boolean => {
  return currentGameCardList.some(
    (cardFromGameList) =>
      JSON.stringify(cardFromGameList) === JSON.stringify(card)
  ); // TODO: try realise with reselect
};

const CardCategoryWrapper = ({
  card,
  giveAnswer,
  currentGameCardList,
  gameMode,
}: ICardCategoryWrapperProps): ReactElement => {
  const [isShowTranslation, setIsShowTranslation] = useState(false);
  const { name, translate, imageSRC, audioSRC } = card;

  const isGuessedCard = checkIsGuessedCard(currentGameCardList, card);

  const showTranslation = () => {
    if (gameMode === GameMode.READY_TO_GAME) return;
    setIsShowTranslation(!isShowTranslation);
  };

  const playCardAudio = () => {
    if (gameMode === GameMode.READY_TO_GAME) return;
    playAudio(audioSRC);
  };

  const onCardClick = () => {
    if (gameMode === GameMode.IN_GAME) giveAnswer(card);
  };

  return (
    <div
      onClick={onCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={() => console.log('as')}
      className={
        gameMode === GameMode.IN_GAME && !isGuessedCard
          ? classes.cardWrapperGuessed
          : classes.cardWrapper
      }
    >
      <p
        className={
          isShowTranslation
            ? `${classes.translation} ${classes.translationActive}`
            : classes.translation
        }
      >
        {translate}
      </p>
      {gameMode === GameMode.NO_GAME && (
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
        title={
          gameMode === GameMode.NO_GAME || gameMode === GameMode.READY_TO_GAME
            ? name
            : ''
        }
        isReadyToStartedGame={gameMode === GameMode.READY_TO_GAME}
        imageSRC={imageSRC}
      />
    </div>
  );
};

const mapStateToProps = (state: GameReducerType) => ({
  lastAnswer: state.gameReducer.lastAnswer,
  currentGameCardList: state.gameReducer.currentGameCardList,
  gameMode: getGameModeStatus(state.gameReducer),
});

export default connect(mapStateToProps)(CardCategoryWrapper);
