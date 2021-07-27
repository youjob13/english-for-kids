import React, { ReactElement, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../../Card/Card';
import { ICardCategoryWrapperProps } from '../../../../../shared/interfaces/props-models';
import { setGivenAnswer } from '../../../../../store/gameSlice';
import CardFront from './CardFront/CardFront';
import {
  CARD_BACK_STYLES,
  CARD_CONTAINER_ROTATED_STYLES,
  CARD_CONTAINER_STYLES,
  CARD_FRONT_STYLES,
  CARD_WRAPPER_GUESSED_STYLES,
  CARD_WRAPPER_STYLES,
} from '../../../../../shared/stylesVariables';
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
import { getGameState } from '../../../../../shared/selectors';

const CardWrapperInGame = ({
  word,
  currentQuestion,
}: ICardCategoryWrapperProps): ReactElement => {
  const dispatch = useDispatch();
  const { gameMode, currentGameCardList } = useSelector(getGameState);
  const [isShowTranslation, setIsShowTranslation] = useState(
    booleanStateValueDefault
  );
  const { _id, name, translate, imageSRC, audioSRC } = word;
  const isGuessedCard = checkIsGuessedCard(currentGameCardList, word);

  const onShowTranslationClick = useCallback(() => {
    if (gameMode === GameMode.READY_TO_GAME) return;
    setIsShowTranslation(!isShowTranslation);
  }, [isShowTranslation]);
  const onCardPlayAudioClick = useCallback(() => {
    if (gameMode === GameMode.READY_TO_GAME) return;
    playAudio(audioSRC);
    dispatch(updateStatistics(_id, StatisticsParam.TRAIN));
  }, [audioSRC]);

  const onCardClick = (): void => {
    const answerResult = compareAnswerAndQuestion(word, currentQuestion);
    dispatch(setGivenAnswer(word, answerResult));

    const statisticsParam = answerResult
      ? StatisticsParam.HIT
      : StatisticsParam.WRONG;
    dispatch(updateStatistics(word._id, statisticsParam));
  };

  return (
    <li
      onClick={() => gameMode === GameMode.IN_GAME && onCardClick()}
      onMouseLeave={() => setIsShowTranslation(false)}
      className={
        gameMode === GameMode.IN_GAME && !isGuessedCard
          ? CARD_WRAPPER_GUESSED_STYLES
          : CARD_WRAPPER_STYLES
      }
    >
      <div
        className={
          !isShowTranslation
            ? CARD_CONTAINER_STYLES
            : CARD_CONTAINER_ROTATED_STYLES
        }
      >
        <div className={CARD_FRONT_STYLES}>
          <CardFront
            title={gameMode === GameMode.NO_GAME ? name : EMPTY_LINE}
            imageSRC={imageSRC}
            gameMode={gameMode}
            playCardAudio={onCardPlayAudioClick}
            showTranslation={onShowTranslationClick}
          />
        </div>
        <div className={CARD_BACK_STYLES}>
          <Card
            title={
              gameMode === GameMode.NO_GAME ||
              gameMode === GameMode.READY_TO_GAME
                ? translate
                : EMPTY_LINE
            }
            isReadyToStartedGame={gameMode === GameMode.READY_TO_GAME}
            imageSRC={imageSRC}
          />
        </div>
      </div>
    </li>
  );
};

export default CardWrapperInGame;
