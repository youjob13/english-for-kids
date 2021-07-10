import React, { ReactElement, useEffect, lazy, useState } from 'react';
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
import EndGamePopup from './components/Popup/EndGamePopup/EndGamePopup';
import Footer from './components/Footer/Footer';
import Preloader from './shared/baseComponents/Preloader/Preloader';
import { APP_CONTENT, APP_WRAPPER } from './shared/stylesVariables';
import { Path } from './shared/globalVariables';
import withLazyLoading from './shared/hoc/withLazyLoading';
import LoginPopup from './components/Popup/LoginPopup/LoginPopup';
import { LoginContext } from './shared/context';

const Statistics = lazy(() => import('./components/Statistics/Statistics'));

const App = (): ReactElement => {
  const dispatch = useDispatch();
  const [isOpenLoginPopup, toggleLoginPopup] = useState(false);
  const { isFetching } = useSelector(
    (state: CardsReducerType) => state.cardsReducer
  );
  const { isActiveEndGamePopup, currentGameAnswers } = useSelector(
    (state: GameReducerType) => state.gameReducer
  );

  const toggleLoginPopupMode = () => {
    toggleLoginPopup(!isOpenLoginPopup);
  };

  useEffect(() => {
    dispatch(getAllCards());
  }, [dispatch]);

  return (
    <div className={APP_WRAPPER}>
      {isOpenLoginPopup && (
        <LoginContext.Provider
          value={{ isOpenLoginPopup, toggleLoginPopup: toggleLoginPopupMode }}
        >
          <LoginPopup />
        </LoginContext.Provider>
      )}
      <Header
        isOpenLoginPopup={isOpenLoginPopup}
        setIsOpenLoginPopup={toggleLoginPopupMode}
      />
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
