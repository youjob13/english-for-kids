import React, { ReactElement, useContext } from 'react';
import Popup from '../Popup';
import {
  LOGIN_POPUP_BUTTON_CANCEL,
  LOGIN_POPUP_BUTTON_OK,
  LOGIN_POPUP_BUTTONS_WRAPPER,
  LOGIN_POPUP_CLOSE,
  LOGIN_POPUP_FORM,
  LOGIN_POPUP_INPUT,
  LOGIN_POPUP_TITLE,
} from '../../../shared/stylesVariables';
import { LoginContext } from '../../../shared/context';

const LoginPopup = (): ReactElement => {
  const { toggleLoginPopup } = useContext(LoginContext);

  return (
    <Popup>
      <div
        role="button"
        tabIndex={0}
        onKeyPress={() => console.log('close popup')}
        onClick={() => toggleLoginPopup()}
        className={LOGIN_POPUP_CLOSE}
      />
      <form className={LOGIN_POPUP_FORM}>
        <legend className={LOGIN_POPUP_TITLE}>Login</legend>
        <input className={LOGIN_POPUP_INPUT} type="text" placeholder="Login" />
        <input
          className={LOGIN_POPUP_INPUT}
          type="password"
          placeholder="Password"
        />
        <div className={LOGIN_POPUP_BUTTONS_WRAPPER}>
          <button className={LOGIN_POPUP_BUTTON_CANCEL} type="button">
            Cancel
          </button>
          <button className={LOGIN_POPUP_BUTTON_OK} type="button">
            Login
          </button>
        </div>
      </form>
    </Popup>
  );
};

export default LoginPopup;
