import React, { ReactElement, useEffect, lazy } from 'react';
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
import { APP_CONTENT, APP_WRAPPER } from './shared/stylesVariables';
import { Path } from './shared/globalVariables';
import withLazyLoading from './shared/hoc/withLazyLoading';

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
    <div className={APP_WRAPPER}>
      <Header />
      <main className={APP_CONTENT}>
        {!isFetching ? (
          <Preloader />
        ) : (
          <Switch>
            <Route path={Path.MAIN} component={MainPage} />
            <Route path={Path.CATEGORY} component={Category} />
            <Route
              path={Path.STATISTICS}
              render={withLazyLoading(Statistics)}
            />
            <Redirect exact from={Path.ROOT} to={Path.MAIN} />
            <Route path={Path.OTHER} render={() => <div>404</div>} />
          </Switch>
        )}
        {isActiveEndGamePopup && (
          <EndGamePopup answerList={currentGameAnswers} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
