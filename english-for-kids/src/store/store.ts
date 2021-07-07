import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cardsSlice from './cardsSlice';
import gameSlice from './gameSlice';
import statisticSlice from './statisticSlice';
import difficultWordsSlice from './difficultWordsSlice';

const rootReducer = combineReducers({
  cardsReducer: cardsSlice,
  gameReducer: gameSlice,
  statisticReducer: statisticSlice,
  difficultWordsReducer: difficultWordsSlice,
});

const store = configureStore({ reducer: rootReducer });

export default store;
