import React, { ReactElement, useEffect, useState } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { checkAuthorize } from './store/authSlice';
import LoginPopup from './components/Popup/LoginPopup/LoginPopup';
import {
  APP_WRAPPER_STYLES,
  booleanStateValueDefault,
  Path,
} from './shared/globalVariables';
import Game from './components/Game/Game';
import { LoginContext } from './shared/context';
import AdminPanel from './components/AdminPanel/AdminPanel';
import LanguageSwitch from './shared/baseComponents/LanguageSwitch/LanguageSwitch';

const App = (): ReactElement => {
  const dispatch = useDispatch();
  const [isOpenLoginPopup, setLoginPopupMode] = useState(
    booleanStateValueDefault
  );
  useEffect(() => {
    dispatch(checkAuthorize());
  }, [dispatch]);

  const toggleLoginPopupMode = () => {
    setLoginPopupMode(!isOpenLoginPopup);
  };

  return (
    <LoginContext.Provider
      value={{
        isOpenLoginPopup,
        toggleLoginPopup: toggleLoginPopupMode,
      }}
    >
      <div className={APP_WRAPPER_STYLES}>
        <LanguageSwitch />
        <Switch>
          {localStorage.token && (
            <Route component={AdminPanel} path={Path.ADMIN_PANEL_ROOT} />
          )}
          <Route component={Game} path={Path.ROOT} />
        </Switch>
        {isOpenLoginPopup && <LoginPopup />}
      </div>
    </LoginContext.Provider>
  );
};
export default App;
