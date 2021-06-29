import { IGameState } from '../shared/interfaces/store-models';
import { GameMode } from '../shared/interfaces/props-models';
import { ICardItem } from '../shared/interfaces/cards-models';

export const getCurrentQuestion = (state: IGameState): ICardItem | null =>
  state.currentQuestion;
export const getCurrentGameCardList = (state: IGameState): ICardItem[] =>
  state.currentGameCardList;
export const getGameModeStatus = (state: IGameState): GameMode =>
  state.gameMode;
