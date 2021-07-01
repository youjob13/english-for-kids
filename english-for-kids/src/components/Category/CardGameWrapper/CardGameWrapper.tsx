import React, { ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../Card/Card';
import {
  GameMode,
  ICardCategoryWrapperProps,
} from '../../../shared/interfaces/props-models';
import { GameReducerType } from '../../../shared/interfaces/store-models';
import playAudio from '../../../shared/helpersFunction/playSound';
import { ICardItem } from '../../../shared/interfaces/cards-models';
import { setGivenAnswer } from '../../../store/gameSlice';
import CardFront from './CardFront';
import {
  CARD_BACK_STYLES,
  CARD_CONTAINER_ROTATED_STYLES,
  CARD_CONTAINER_STYLES,
  CARD_FRONT_STYLES,
  CARD_WRAPPER_GUESSED_STYLES,
  CARD_WRAPPER_STYLES,
} from '../../../shared/globalVariables';
import { getWordStatistic } from '../../../shared/api/api';

const checkIsGuessedCard = (
  currentGameCardList: ICardItem[],
  card: ICardItem
): boolean => {
  return currentGameCardList.some(
    (cardFromGameList) =>
      JSON.stringify(cardFromGameList) === JSON.stringify(card)
  ); // TODO: try realise with reselect
};

const addUpdatedTrainWordStatisticToDataBase = (wordName: string): void => {
  const currentWordStatistic = getWordStatistic(wordName);

  const currentTrainCounter =
    (currentWordStatistic && currentWordStatistic.trainCounter) || 0;

  localStorage[wordName] = JSON.stringify({
    ...currentWordStatistic,
    trainCounter: currentTrainCounter + 1,
  });
};

const CardGameWrapper = ({ card }: ICardCategoryWrapperProps): ReactElement => {
  const dispatch = useDispatch();
  const { gameMode, currentGameCardList } = useSelector(
    (state: GameReducerType) => state.gameReducer
  );
  const [isShowTranslation, setIsShowTranslation] = useState(false);
  const { name, translate, imageSRC, audioSRC } = card;

  const isGuessedCard = checkIsGuessedCard(currentGameCardList, card);

  const onShowTranslationClick = (): void => {
    if (gameMode === GameMode.READY_TO_GAME) return;
    setIsShowTranslation(!isShowTranslation);
  };

  const onPlayCardAudioClick = (): void => {
    if (gameMode === GameMode.READY_TO_GAME) return;
    playAudio(audioSRC);
    addUpdatedTrainWordStatisticToDataBase(card.name);
  };

  const onCardClick = (): void => {
    if (gameMode === GameMode.IN_GAME) {
      dispatch(setGivenAnswer(card));
    }
  };

  return (
    <li
      className={
        gameMode === GameMode.IN_GAME && !isGuessedCard
          ? CARD_WRAPPER_GUESSED_STYLES
          : CARD_WRAPPER_STYLES
      }
    >
      <div
        role="button"
        onClick={onCardClick}
        onKeyPress={() => console.log('onKeyPress')}
        tabIndex={0}
        className={
          !isShowTranslation
            ? CARD_CONTAINER_STYLES
            : CARD_CONTAINER_ROTATED_STYLES
        }
      >
        <div className={CARD_FRONT_STYLES}>
          <CardFront
            title={
              gameMode === GameMode.NO_GAME ||
              gameMode === GameMode.READY_TO_GAME
                ? name
                : ''
            }
            isReadyToStartedGame={gameMode === GameMode.READY_TO_GAME}
            imageSRC={imageSRC}
            playCardAudio={onPlayCardAudioClick}
            showTranslation={onShowTranslationClick}
          />
        </div>
        <div
          className={CARD_BACK_STYLES}
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
    </li>
  );
};

export default CardGameWrapper;
