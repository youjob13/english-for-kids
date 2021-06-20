import React, { ReactElement } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import Cat1 from './components/cat1';
import Cat2 from './components/cat2';

const App = (): ReactElement => (
  <div className="app-wrapper">
    <Header />
    <main className="app-content">
      <Switch>
        <Route path="/main" component={MainPage} />
        <Route path="/cat1" component={Cat1} />
        <Route path="/cat2" component={Cat2} />
        <Redirect from="/" to="/main" />
      </Switch>
    </main>
  </div>
);

export default App;
