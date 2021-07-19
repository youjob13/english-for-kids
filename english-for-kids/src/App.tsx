import React, { ReactElement, useEffect, lazy, useState } from 'react';
import './App.css';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCards } from './store/cardsSlice';
import {
  AuthReducerType,
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
import ContentField from './components/AdminPanel/ContentField/ContentField';
import AdminHeader from './components/AdminPanel/Header/Header';
import { checkAuthorize } from './store/authSlice';

const Statistics = lazy(() => import('./components/Statistics/Statistics'));

const App = (): ReactElement => {
  const dispatch = useDispatch();
  const [isOpenLoginPopup, toggleLoginPopup] = useState(false);
  const { isFetching } = useSelector(
    (state: CardsReducerType) => state.cardsReducer
  );
  const { isAuth } = useSelector((state: AuthReducerType) => state.authReducer);
  const { isActiveEndGamePopup, currentGameAnswers } = useSelector(
    (state: GameReducerType) => state.gameReducer
  );
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllCards());
    dispatch(checkAuthorize());
  }, [dispatch]);

  useEffect(() => {
    if (!localStorage.token) {
      history.push(Path.MAIN); // TODO: move out
    }
  }, [isAuth]);

  const toggleLoginPopupMode = () => {
    toggleLoginPopup(!isOpenLoginPopup);
  };

  return (
    <LoginContext.Provider
      value={{
        isOpenLoginPopup,
        toggleLoginPopup: toggleLoginPopupMode,
      }}
    >
      <div className={APP_WRAPPER}>
        <>
          {isAuth ? <AdminHeader /> : <Header />}
          <main className={APP_CONTENT}>
            {!isFetching ? (
              <Preloader />
            ) : (
              <Switch>
                <Route path={Path.MAIN} component={MainPage} />
                <Route path={Path.ADMIN_PAGE} component={ContentField} />
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
        </>
        {isOpenLoginPopup && <LoginPopup />}
      </div>
    </LoginContext.Provider>
  );
};
export default App;
