import React, { FormEvent, ReactElement, useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
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
import { AuthFormValue } from '../../../shared/interfaces/api-models';
import { getAuthorize } from '../../../store/authSlice';
import { authAPI } from '../../../shared/api/api';

const authFormValue: Record<AuthFormValue, string> = {
  username: '',
  password: '',
};

const LoginPopup = (): ReactElement => {
  const dispatch = useDispatch();
  const { toggleLoginPopup } = useContext(LoginContext);
  const [authFormData, setAuthFormValue] = useState(authFormValue);

  const sendData = async () => {
    dispatch(getAuthorize(authFormData));
  };

  const testRequest = () => {
    const cards = authAPI.getCards();
    console.log(cards);
  };

  const updateAuthForm = (event: FormEvent) => {
    const target = event.target as HTMLInputElement;
    const newAuthFormValue: Record<any, string> = {
      ...authFormData,
    };

    newAuthFormValue[target.name] = target.value;
    setAuthFormValue(newAuthFormValue);
  };

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
        <input
          onInput={updateAuthForm}
          className={LOGIN_POPUP_INPUT}
          type="text"
          name="username"
          placeholder="Login"
        />
        <input
          onInput={updateAuthForm}
          className={LOGIN_POPUP_INPUT}
          type="password"
          name="password"
          placeholder="Password"
        />
        <div className={LOGIN_POPUP_BUTTONS_WRAPPER}>
          <button
            onClick={testRequest}
            className={LOGIN_POPUP_BUTTON_CANCEL}
            type="button"
          >
            Cancel
          </button>
          <button
            onClick={sendData}
            className={LOGIN_POPUP_BUTTON_OK}
            type="button"
          >
            Login
          </button>
        </div>
      </form>
    </Popup>
  );
};

export default LoginPopup;
