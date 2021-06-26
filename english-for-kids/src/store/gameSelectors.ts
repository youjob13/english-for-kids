import { IGameState } from '../shared/interfaces/store-models';

export const getCurrentQuestion = (state: IGameState) => state.currentQuestion;
export const getIsStartedGame = (state: IGameState) => state.isStartedGame;
export const getIsReadyToStartedGame = (state: IGameState) =>
  state.isReadyToStartedGame;
