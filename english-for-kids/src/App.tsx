import React, { Suspense, ReactElement, useEffect, lazy } from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCards } from './store/cardsSlice';
import {
  CardsReducerType,
  GameReducerType,
} from './shared/interfaces/store-models';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import Category from './components/Category/Category';
import EndGamePopup from './components/EndGamePopup/EndGamePopup';
import Footer from './components/Footer/Footer';
import Preloader from './shared/baseComponents/Preloader/Preloader';

const Statistics = lazy(() => import('./components/Statistics/Statistics'));

const App = (): ReactElement => {
  const dispatch = useDispatch();
  const { isFetching } = useSelector(
    (state: CardsReducerType) => state.cardsReducer
  );
  const { isActiveEndGamePopup, currentGameAnswers } = useSelector(
    (state: GameReducerType) => state.gameReducer
  );

  useEffect(() => {
    dispatch(getAllCards());
  }, [dispatch]);

  return (
    <div className="app-wrapper">
      <Header />
      <main className="app-content">
        {!isFetching ? (
          <Preloader />
        ) : (
          <Switch>
            <Route path="/main" component={MainPage} />
            <Route path="/section/:category" component={Category} />
            <Route
              path="/statistics"
              render={() => (
                <Suspense fallback={<Preloader />}>
                  <Statistics />
                </Suspense>
              )}
            />
            <Redirect exact from="/" to="/main" />
            <Route path="*" render={() => <div>404</div>} />
          </Switch>
        )}
        {isActiveEndGamePopup && (
          <EndGamePopup answerList={currentGameAnswers} /> // TODO: move out
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
