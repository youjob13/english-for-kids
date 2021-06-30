import React, { ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from '../category.module.scss';
import Card from '../../Card/Card';
import {
  GameMode,
  ICardCategoryWrapperProps,
} from '../../../shared/interfaces/props-models';
import { GameReducerType } from '../../../shared/interfaces/store-models';
import playAudio from '../../../shared/helpersFunction/playSound';
import { ICardItem } from '../../../shared/interfaces/cards-models';
import { IWordStatistic } from '../../../store/statisticSlice';
import { setGivenAnswer } from '../../../store/gameSlice';
import CardFront from './CardFront';

const CARD_WRAPPER_GUESSED_STYLES = classes.cardWrapperGuessed;
const CARD_WRAPPER_STYLES = classes.cardWrapper;
const CARD_CONTAINER_STYLES = classes.cardContainer;
const CARD_CONTAINER_ROTATED_STYLES = classes.cardContainerRotated;
const CARD_FRONT_STYLES = classes.cardFront;
const CARD_BACK_STYLES = classes.cardBack;

const checkIsGuessedCard = (
  currentGameCardList: ICardItem[],
  card: ICardItem
): boolean => {
  return currentGameCardList.some(
    (cardFromGameList) =>
      JSON.stringify(cardFromGameList) === JSON.stringify(card)
  ); // TODO: try realise with reselect
};

const getWordStatistic = (wordName: string): IWordStatistic => {
  return JSON.parse(localStorage.getItem(wordName)!);
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

  const onShowTranslationClick = () => {
    if (gameMode === GameMode.READY_TO_GAME) return;
    setIsShowTranslation(!isShowTranslation);
  };

  const onPlayCardAudioClick = () => {
    if (gameMode === GameMode.READY_TO_GAME) return;
    playAudio(audioSRC);
    addUpdatedTrainWordStatisticToDataBase(card.name);
  };

  const onCardClick = () => {
    if (gameMode === GameMode.IN_GAME) {
      dispatch(setGivenAnswer(card));
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
    </div>
  );
};

export default CardGameWrapper;
