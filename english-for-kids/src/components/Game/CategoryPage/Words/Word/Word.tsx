import React, { ReactElement, useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../../Card/Card';
import { ICardCategoryWrapperProps } from '../../../../../shared/interfaces/props-models';
import { setGivenAnswer } from '../../../../../store/gameSlice';
import CardFront from '../../../Card/CardFront/CardFront';
import playAudio from '../../../../../shared/helperFunctions/playSound';
import {
  booleanStateValueDefault,
  EMPTY_LINE,
  GameMode,
  StatisticsParam,
} from '../../../../../shared/globalVariables';
import checkIsGuessedCard from '../../../../../shared/helperFunctions/checkIsGuessedCard';
import compareAnswerAndQuestion from '../../../../../shared/helperFunctions/compareAnswerAndQuestion';
import { updateStatistics } from '../../../../../store/statisticSlice';
import { getGameState } from '../../../../../store/selectors';
import classes from '../../category.module.scss';

const Word = ({
  word,
  currentQuestion,
}: ICardCategoryWrapperProps): ReactElement => {
  const dispatch = useDispatch();
  const { gameMode, currentGameCardList } = useSelector(getGameState);
  const [isShowTranslation, setIsShowTranslation] = useState(
    booleanStateValueDefault
  );
  const { _id, name, translate, imageSRC, audioSRC } = word;
  const isGuessedCard = useMemo(
    () => checkIsGuessedCard(currentGameCardList, word),
    [currentGameCardList, word]
  );

  const onShowTranslationClick = useCallback(() => {
    if (gameMode === GameMode.READY_TO_GAME) {
      return;
    }

    setIsShowTranslation(!isShowTranslation);
  }, [gameMode, isShowTranslation]);
  const onCardPlayAudioClick = useCallback(() => {
    if (gameMode === GameMode.READY_TO_GAME) {
      return;
    }

    playAudio(audioSRC);
    dispatch(updateStatistics(_id, StatisticsParam.TRAIN));
  }, [dispatch, gameMode, audioSRC]);

  const onCardClick = (): void => {
    const answerResult = compareAnswerAndQuestion(word, currentQuestion);
    dispatch(setGivenAnswer(word, answerResult));

    const statisticsParam = answerResult
      ? StatisticsParam.HIT
      : StatisticsParam.WRONG;
    dispatch(updateStatistics(word._id, statisticsParam));
  };

  const cardWrapperStyle =
    gameMode === GameMode.IN_GAME && !isGuessedCard
      ? classes.cardWrapperGuessed
      : classes.cardWrapper;

  const cardStyle = !isShowTranslation
    ? classes.cardContainer
    : classes.cardContainerRotated;

  const cardTitle =
    gameMode === GameMode.NO_GAME || gameMode === GameMode.READY_TO_GAME
      ? translate
      : EMPTY_LINE;

  return (
    <li
      onClick={() => gameMode === GameMode.IN_GAME && onCardClick()}
      onMouseLeave={() => setIsShowTranslation(false)}
      className={cardWrapperStyle}
    >
      <div className={cardStyle}>
        <div className={classes.cardFront}>
          <CardFront
            title={gameMode === GameMode.NO_GAME ? name : EMPTY_LINE}
            imageSRC={imageSRC}
            gameMode={gameMode}
            playCardAudio={onCardPlayAudioClick}
            showTranslation={onShowTranslationClick}
          />
        </div>
        <div className={classes.cardBack}>
          <Card
            title={cardTitle}
            isReadyToStartedGame={gameMode === GameMode.READY_TO_GAME}
            imageSRC={imageSRC}
          />
        </div>
      </div>
    </li>
  );
};

export default Word;
