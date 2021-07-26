import React, { ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../Card/Card';
import { ICardCategoryWrapperProps } from '../../../../shared/interfaces/props-models';
import { GameReducerType } from '../../../../shared/interfaces/store-models';
import { setGivenAnswer } from '../../../../store/gameSlice';
import CardFront from './CardFront/CardFront';
import {
  CARD_BACK_STYLES,
  CARD_CONTAINER_ROTATED_STYLES,
  CARD_CONTAINER_STYLES,
  CARD_FRONT_STYLES,
  CARD_WRAPPER_GUESSED_STYLES,
  CARD_WRAPPER_STYLES,
} from '../../../../shared/stylesVariables';
import playAudio from '../../../../shared/helperFunctions/playSound';
import { GameMode, StatisticsParam } from '../../../../shared/globalVariables';
import checkIsGuessedCard from '../../../../shared/helperFunctions/checkIsGuessedCard';
import compareAnswerAndQuestion from '../../../../shared/helperFunctions/compareTwoObjects';
import { updateStatistics } from '../../../../store/statisticSlice';

const CardWrapperInGame = ({
  card,
  currentQuestion,
}: ICardCategoryWrapperProps): ReactElement => {
  const dispatch = useDispatch();
  const { gameMode, currentGameCardList } = useSelector(
    (state: GameReducerType) => state.gameReducer
  );
  const [isShowTranslation, setIsShowTranslation] = useState(false);
  const { _id, name, translate, imageSRC, audioSRC } = card;
  const isGuessedCard = checkIsGuessedCard(currentGameCardList, card);

  const onShowTranslationClick = (): void => {
    if (gameMode === GameMode.READY_TO_GAME) return;
    setIsShowTranslation(!isShowTranslation);
  };

  const onCardPlayAudioClick = (): void => {
    if (gameMode === GameMode.READY_TO_GAME) return;
    console.log(12);
    playAudio(audioSRC);
    dispatch(updateStatistics(_id, StatisticsParam.TRAIN));
    // updateTrainWordStatistics(card.name);
  };

  const onCardClick = (): void => {
    const answerResult = compareAnswerAndQuestion(card, currentQuestion);
    dispatch(setGivenAnswer(card, answerResult));
    const statisticsParam = answerResult
      ? StatisticsParam.HIT
      : StatisticsParam.WRONG;
    dispatch(updateStatistics(card._id, statisticsParam));
  };

  return (
    <li
      role="row"
      onClick={() => gameMode === GameMode.IN_GAME && onCardClick()}
      onKeyPress={() => console.log('onKeyPress')}
      tabIndex={0}
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
            title={gameMode === GameMode.NO_GAME ? name : ''}
            imageSRC={imageSRC}
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
                : ''
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
