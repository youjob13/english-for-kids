import React, { ReactElement } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import Category from './components/Category/Category';

const App = (): ReactElement => (
  <div className="app-wrapper">
    <Header />
    <main className="app-content">
      <Switch>
        <Route path="/main" component={MainPage} />
        <Route path="/category" component={Category} />
        <Redirect from="/" to="/main" />
      </Switch>
    </main>
  </div>
);

export default App;
