import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cardsSlice from './cardsSlice';
import gameSlice from './gameSlice';

const rootReducer = combineReducers({
  cardsReducer: cardsSlice,
  gameReducer: gameSlice,
});

const store = configureStore({ reducer: rootReducer });

export default store;
