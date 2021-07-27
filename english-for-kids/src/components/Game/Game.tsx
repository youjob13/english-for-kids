import React, { lazy, ReactElement, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header/Header';
import { APP_CONTENT } from '../../shared/stylesVariables';
import { Path } from '../../shared/globalVariables';
import MainPage from './MainPage/MainPage';
import Category from './Category/Category';
import EndGamePopup from '../Popup/EndGamePopup/EndGamePopup';
import Footer from './Footer/Footer';
import { getWords, nullifyCards } from '../../store/cardsSlice';
import withLazyLoading from '../../shared/hoc/withLazyLoading';
import { getGameState } from '../../shared/selectors';

const Statistics = lazy(() => import('./Statistics/Statistics'));

const Game = (): ReactElement => {
  const dispatch = useDispatch();
  const { isActiveEndGamePopup, currentGameAnswers } =
    useSelector(getGameState);

  console.log(231);

  useEffect(() => {
    dispatch(nullifyCards());
    dispatch(getWords());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className={APP_CONTENT}>
        <Switch>
          <Route path={Path.MAIN} component={MainPage} />
          <Route path={Path.CATEGORY} component={Category} />
          <Route path={Path.STATISTICS} render={withLazyLoading(Statistics)} />
          <Redirect exact from={Path.ROOT} to={Path.MAIN} />
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

export default Game;
