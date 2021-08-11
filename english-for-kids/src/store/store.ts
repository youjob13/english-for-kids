import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cardsSlice from './wordsSlice';
import gameSlice from './gameSlice';
import statisticSlice from './statisticSlice';
import difficultWordsSlice from './difficultWordsSlice';
import authSlice from './authSlice';

const rootReducer = combineReducers({
  cardsReducer: cardsSlice,
  gameReducer: gameSlice,
  statisticReducer: statisticSlice,
  difficultWordsReducer: difficultWordsSlice,
  authReducer: authSlice,
});

const store = configureStore({ reducer: rootReducer });

export default store;
