import React, { ReactElement } from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import Category from './components/Category/Category';
import EndGamePopup from './components/EndGamePopup/EndGamePopup';
import { GameReducerType } from './shared/interfaces/store-models';
import { getGameModeStatus } from './store/gameSelectors';
import { GameMode, IAppProps } from './shared/interfaces/props-models';

const App = ({ gameMode }: IAppProps): ReactElement => (
  <div className="app-wrapper">
    <Header />
    <main className="app-content">
      <Switch>
        <Route path="/main" component={MainPage} />
        <Route path="/section/:category" component={Category} />
        <Redirect from="/" to="/main" />
      </Switch>
      {gameMode === GameMode.SHOW_RESULT && <EndGamePopup />}
    </main>
  </div>
);

const mapStateToProps = (state: GameReducerType) => ({
  gameMode: getGameModeStatus(state.gameReducer),
});

export default connect(mapStateToProps)(App);
