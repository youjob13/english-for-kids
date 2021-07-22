import React, { ReactElement, useEffect, useState } from 'react';
import './App.css';
import { Switch } from 'react-router-dom';
import { GuardedRoute, GuardProvider } from 'react-router-guards';
import { useDispatch } from 'react-redux';
import { APP_WRAPPER } from './shared/stylesVariables';
import LoginPopup from './components/Game/Popup/LoginPopup/LoginPopup';
import { LoginContext } from './shared/context';
import AdminPanel from './components/AdminPanel/AdminPanel';
import Game from './components/Game/Game';
import requireLogin from './shared/helperFunctions/requireLogin';
import { checkAuthorize } from './store/authSlice';

const App = (): ReactElement => {
  const dispatch = useDispatch();
  const [isOpenLoginPopup, toggleLoginPopup] = useState(false);

  useEffect(() => {
    dispatch(checkAuthorize());
  }, [dispatch]);

  const toggleLoginPopupMode = () => {
    toggleLoginPopup(!isOpenLoginPopup);
  };

  return (
    <GuardProvider>
      <LoginContext.Provider
        value={{
          isOpenLoginPopup,
          toggleLoginPopup: toggleLoginPopupMode,
        }}
      >
        <div className={APP_WRAPPER}>
          <Switch>
            <GuardedRoute
              path="/admin-panel"
              component={AdminPanel}
              guards={[requireLogin]}
              meta={{ auth: true }}
            />
            <GuardedRoute path="/" component={Game} />
          </Switch>
          {isOpenLoginPopup && <LoginPopup />}
        </div>
      </LoginContext.Provider>
    </GuardProvider>
  );
};
export default App;
