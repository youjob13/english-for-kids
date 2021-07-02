import React, { ReactElement, useEffect } from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import Category from './components/Category/Category';
import EndGamePopup from './components/EndGamePopup/EndGamePopup';
import { GameReducerType } from './shared/interfaces/store-models';
import { GameMode } from './shared/interfaces/props-models';
import Statistics from './components/Statistics/Statistics';
import { getAllCards } from './store/cardsSlice';
import Footer from './components/Footer/Footer';

const App = (): ReactElement => {
  const { gameMode, currentGameAnswers } = useSelector(
    (state: GameReducerType) => state.gameReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCards());
  }, []);

  return (
    <div className="app-wrapper">
      <Header />
      <main className="app-content">
        <Switch>
          <Route path="/main" component={MainPage} />
          <Route path="/statistics" component={Statistics} />
          <Route path="/section/:category" component={Category} />
          <Redirect from="/" to="/main" />
        </Switch>
        {gameMode === GameMode.SHOW_RESULT && (
          <EndGamePopup answersList={currentGameAnswers} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
