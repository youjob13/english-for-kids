import React, { lazy, ReactElement, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header/Header';
import { APP_CONTENT_STYLES, Path } from '../../shared/globalVariables';
import MainPage from './MainPage/MainPage';
import CategoryPage from './CategoryPage/CategoryPage';
import EndGamePopup from '../Popup/EndGamePopup/EndGamePopup';
import Footer from './Footer/Footer';
import { getWords, nullifyCards } from '../../store/cardsSlice';
import withLazyLoading from '../../shared/hoc/withLazyLoading';
import { getGameState } from '../../store/selectors';

const Statistics = lazy(() => import('./Statistics/Statistics'));

const Game = (): ReactElement => {
  const dispatch = useDispatch();
  const { isActiveEndGamePopup, currentGameAnswers } =
    useSelector(getGameState);

  useEffect(() => {
    dispatch(nullifyCards());
    dispatch(getWords());
  }, [dispatch]);
  return (
    <>
      <Header />
      <main className={APP_CONTENT_STYLES}>
        <Switch>
          <Route path={Path.CATEGORY} component={CategoryPage} />
          <Route path={Path.STATISTICS} render={withLazyLoading(Statistics)} />
          <Route exact path={Path.ROOT} component={MainPage} />
          {!localStorage.token && (
            <Redirect from={Path.ADMIN_PANEL_ROOT} to={Path.ROOT} />
          )}
          <Route path={Path.OTHER} render={() => <div>404</div>} />
        </Switch>
        {isActiveEndGamePopup && (
          <EndGamePopup answerList={currentGameAnswers} />
        )}
      </main>
      <Footer />
    </>
  );
};

export default React.memo(Game);
