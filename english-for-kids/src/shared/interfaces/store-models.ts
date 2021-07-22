import { AnyAction, CombinedState, ThunkAction } from '@reduxjs/toolkit';
import { ThunkDispatch } from 'redux-thunk';
import { ICardItem, ICardsData } from './cards-models';
import { GameMode } from '../globalVariables';

export interface IAuthState {
  isAuth: boolean;
}

export interface ICardsState {
  cardsData: ICardsData[];
  isFetching: boolean;
  playingList: string[];
  currentPageCount: number;
  totalPageCount: number;
}

export interface IStatisticState {
  statisticsData: any;
  isFetching: boolean;
  difficultWords: any;
}

export interface IDifficultWordsState {
  currentDifficultWordList: any[];
}

export interface IGameState {
  currentGameCardList: ICardItem[];
  currentQuestion: ICardItem | null;
  lastAnswer: ICardItem | null;
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

export type GameAndCardsReducerType = {
  gameReducer: IGameState;
  cardsReducer: ICardsState;
};
