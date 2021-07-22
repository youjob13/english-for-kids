import React, { lazy, ReactElement } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './Header/Header';
import { APP_CONTENT } from '../../shared/stylesVariables';
import Preloader from '../../shared/baseComponents/Preloader/Preloader';
import { Path } from '../../shared/globalVariables';
import MainPage from './MainPage/MainPage';
import Category from './Category/Category';
import withLazyLoading from '../../shared/hoc/withLazyLoading';
import EndGamePopup from './Popup/EndGamePopup/EndGamePopup';
import Footer from './Footer/Footer';
import {
  CardsReducerType,
  GameReducerType,
} from '../../shared/interfaces/store-models';

const Statistics = lazy(() => import('./Statistics/Statistics'));

const Game = (): ReactElement => {
  const { isFetching } = useSelector(
    (state: CardsReducerType) => state.cardsReducer
  );
  const { isActiveEndGamePopup, currentGameAnswers } = useSelector(
    (state: GameReducerType) => state.gameReducer
  );

  return (
    <>
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
    </>
  );
};

export default Game;
