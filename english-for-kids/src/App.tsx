import React, { ReactElement, useEffect, useState } from 'react';
import './App.css';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GuardedRoute, GuardProvider } from 'react-router-guards';
import AdminPanel from './components/AdminPanel/AdminPanel';
import Game from './components/Game/Game';
import { checkAuthorize } from './store/authSlice';
import LoginPopup from './components/Popup/LoginPopup/LoginPopup';
import { APP_WRAPPER } from './shared/stylesVariables';
import { LoginContext } from './shared/context';
import requireLogin from './shared/helperFunctions/requireLogin';
import {
  booleanStateValueDefault,
  guardMeta,
  Path,
} from './shared/globalVariables';

const App = (): ReactElement => {
  const dispatch = useDispatch();
  const [isOpenLoginPopup, setLoginPopupMode] = useState(
    booleanStateValueDefault
  );

  useEffect(() => {
    dispatch(checkAuthorize()); // TODO: сделать логинизацию & проверку чище
  }, [dispatch]);

  const toggleLoginPopupMode = () => {
    setLoginPopupMode(!isOpenLoginPopup);
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
              guards={[requireLogin]}
              meta={guardMeta}
              path={Path.ADMIN_PANEL_ROOT}
              component={AdminPanel}
            />
            <GuardedRoute path={Path.ROOT} component={Game} />
          </Switch>
          {isOpenLoginPopup && <LoginPopup />}
        </div>
      </LoginContext.Provider>
    </GuardProvider>
  );
};
export default App;
