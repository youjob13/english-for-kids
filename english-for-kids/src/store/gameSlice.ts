import { createSlice } from '@reduxjs/toolkit';
import { IGameState } from '../shared/interfaces/store-models';

const gameSlice = createSlice({
  name: 'gameSlice',
  initialState: {
    isStartedGame: false,
  } as IGameState,
  reducers: {
    toggleGameMode: (state: IGameState) => ({
      ...state,
      isStartedGame: !state.isStartedGame,
    }),
  },
});

export default gameSlice.reducer;

export const { toggleGameMode } = gameSlice.actions;
