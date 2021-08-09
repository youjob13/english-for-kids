import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import './i18next';
import store from './store/store';
import App from './App';
import { baseName, rootElementID } from './shared/globalVariables';

ReactDOM.render(
  <React.StrictMode>
    <Router basename={baseName}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById(rootElementID)
);
