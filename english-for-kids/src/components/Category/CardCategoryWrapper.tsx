import React, { ReactElement, useState } from 'react';
import { connect } from 'react-redux';
import classes from './category.module.scss';
import Card from '../Card/Card';
import {
  GameMode,
  ICardCategoryWrapperProps,
} from '../../shared/interfaces/props-models';
import { GameAndCardsReducerType } from '../../shared/interfaces/store-models';
import playAudio from '../../shared/helpersFunction/playSound';
import { getGameModeStatus } from '../../store/gameSelectors';
import { ICardItem } from '../../shared/interfaces/cards-models';
import { IWordStatistic } from '../../store/statisticSlice';
import compareAnswerAndQuestion from '../../shared/helpersFunction/compareTwoObjects';

const checkIsGuessedCard = (
  currentGameCardList: ICardItem[],
  card: ICardItem
): boolean => {
  return currentGameCardList.some(
    (cardFromGameList) =>
      JSON.stringify(cardFromGameList) === JSON.stringify(card)
  ); // TODO: try realise with reselect
};

const addUpdatedWordStatisticToDataBase = (
  // TODO: think about using some pattern
  word: ICardItem,
  updatedProp: string,
  currentQuestion?: ICardItem
): void => {
  const currentWordStatistic: IWordStatistic = JSON.parse(
    localStorage.getItem(word.name)!
  );

  if (updatedProp === 'answerCounter' && currentQuestion) {
    const answerResult = compareAnswerAndQuestion(word, currentQuestion);
    console.log(answerResult);

    if (answerResult) {
      const currentWordStatisticLocal: IWordStatistic = JSON.parse(
        // TODO: remove
        localStorage.getItem(currentQuestion.name)!
      );
      const currentRightAnswerCounter =
        (currentWordStatisticLocal &&
          currentWordStatisticLocal.rightAnswerCounter) ||
        0;

      localStorage[word.name] = JSON.stringify({
        ...currentWordStatistic,
        rightAnswerCounter: currentRightAnswerCounter + 1,
      });
    } else {
      const currentWordStatisticLocal: IWordStatistic = JSON.parse(
        // TODO: remove
        localStorage.getItem(currentQuestion.name)!
      );
      const currentFailAnswerCounter =
        (currentWordStatisticLocal &&
          currentWordStatisticLocal.failAnswerCounter) ||
        0;

      console.log(currentWordStatisticLocal);
      localStorage[currentQuestion.name] = JSON.stringify({
        ...currentWordStatistic,
        failAnswerCounter: currentFailAnswerCounter + 1,
      });
    }
  }

  if (updatedProp === 'trainCounter') {
    const currentTrainCounter =
      (currentWordStatistic && currentWordStatistic.trainCounter) || 0;

    localStorage[word.name] = JSON.stringify({
      ...currentWordStatistic,
      trainCounter: currentTrainCounter + 1,
    });
  }

  if (updatedProp === 'askedCounter') {
    const currentAskedCounter =
      (currentWordStatistic && currentWordStatistic.askedCounter) || 0;

    localStorage[word.name] = JSON.stringify({
      ...currentWordStatistic,
      askedCounter: currentAskedCounter + 1,
    });
  }
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
    addUpdatedWordStatisticToDataBase(card, 'trainCounter'); // TODO: enum;
  };

  const onCardClick = () => {
    if (gameMode === GameMode.IN_GAME) {
      giveAnswer(card);
      addUpdatedWordStatisticToDataBase(
        card,
        'answerCounter',
        currentGameCardList[0]
      ); // TODO: enum;
    }
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
      <div
        className={
          !isShowTranslation
            ? classes.cardContainer
            : classes.cardContainerRotated
        }
      >
        <div className={classes.cardFront}>
          {/* TODO: divide two components */}
          <Card
            title={
              gameMode === GameMode.NO_GAME ||
              gameMode === GameMode.READY_TO_GAME
                ? name
                : ''
            }
            isReadyToStartedGame={gameMode === GameMode.READY_TO_GAME}
            imageSRC={imageSRC}
          />
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
        </div>
        <div
          className={classes.cardBack}
          onMouseLeave={() => setIsShowTranslation(false)}
        >
          <Card
            title={
              gameMode === GameMode.NO_GAME ||
              gameMode === GameMode.READY_TO_GAME
                ? translate
                : ''
            }
            isReadyToStartedGame={gameMode === GameMode.READY_TO_GAME}
            imageSRC={imageSRC}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: GameAndCardsReducerType) => ({
  lastAnswer: state.gameReducer.lastAnswer,
  currentGameCardList: state.gameReducer.currentGameCardList,
  gameMode: getGameModeStatus(state.gameReducer),
  playingList: state.cardsReducer.playingList,
});

export default connect(mapStateToProps)(CardCategoryWrapper);
