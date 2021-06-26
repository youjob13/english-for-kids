import { createSlice } from '@reduxjs/toolkit';
import { IGameState } from '../shared/interfaces/store-models';

const gameSlice = createSlice({
  name: 'gameSlice',
  initialState: {
    isReadyToStartedGame: false,
    isStartedGame: false,
  } as IGameState,
  reducers: {
    toggleGameMode: (state: IGameState) => ({
      ...state,
      isReadyToStartedGame: !state.isReadyToStartedGame,
    }),
  },
});

export default gameSlice.reducer;

export const { toggleGameMode } = gameSlice.actions;
