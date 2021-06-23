import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cardsSlice from './cardsSlice';

const rootReducer = combineReducers({ cardsReducer: cardsSlice });

const store = configureStore({ reducer: rootReducer });

export default store;
