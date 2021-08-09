import { AnyAction, CombinedState, ThunkAction } from '@reduxjs/toolkit';
import { ThunkDispatch } from 'redux-thunk';
import { IWord, ICardsData } from './cards-models';
import { GameMode } from '../globalVariables';
import { IWordStatistic } from './api-models';

export interface IAuthState {
  isAuth: boolean;
}

export interface ICardsState {
  cardsData: ICardsData[];
  playingList: string[];
  currentPageCount: number;
  totalPageCount: number;
  isForbiddenError: boolean;
}

export interface IStatisticState {
  wordsStatistics: IWordStatistic[];
  difficultWords: Array<string>;
}

export interface IDifficultWordsState {
  currentDifficultWordList: IWord[];
}

export interface IGameState {
  currentGameCardList: IWord[];
  currentQuestion: IWord | null;
  lastAnswer: IWord | null;
  gameMode: GameMode;
  isActiveEndGamePopup: boolean;
  currentGameAnswers: boolean[];
}

export type CardsReducerType = { cardsReducer: ICardsState };
export type AuthReducerType = { authReducer: IAuthState };
export type GameReducerType = { gameReducer: IGameState };
export type DifficultWordsReducerType = {
  difficultWordsReducer: IDifficultWordsState;
};
export type StatisticReducerType = { statisticReducer: IStatisticState };
export type StateType<T> = CombinedState<T>;

export type ThunkActionType<T> = ThunkAction<void, T, unknown, AnyAction>;
export type ThunkDispatchType<T> = ThunkDispatch<T, unknown, AnyAction>;
