import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cardsSlice from './cardsSlice';
import gameSlice from './gameSlice';
import statisticSlice from './statisticSlice';

const rootReducer = combineReducers({
  cardsReducer: cardsSlice,
  gameReducer: gameSlice,
  statisticReducer: statisticSlice,
});

const store = configureStore({ reducer: rootReducer });

export default store;
