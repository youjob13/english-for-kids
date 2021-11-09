import React, {
  FormEvent,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Popup from '../Popup';
import { LoginContext } from '../../../shared/context';
import { getAuthorize } from '../../../store/authSlice';
import {
  ElemRole,
  initialAuthFormValue,
  InputName,
  InputPlaceholder,
  InputType,
  LocalesKey,
  Path,
} from '../../../shared/globalVariables';
import classes from './loginPopup.module.scss';
import { getAuthState } from '../../../store/selectors';

const LoginPopup = (): ReactElement => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { toggleLoginPopup } = useContext(LoginContext);
  const { isAuth } = useSelector(getAuthState);
  const [authFormData, setAuthFormValue] = useState(initialAuthFormValue);
  const history = useHistory();

  const sendData = (): void => {
    dispatch(getAuthorize(authFormData));
  };

  const closePopup = (): void => {
    toggleLoginPopup();
  };

  useEffect(() => {
    if (localStorage.token) {
      history.push(Path.ADMIN_PANEL_CATEGORIES);
      closePopup();
    }
  }, [isAuth]);

  const updateAuthForm = (event: FormEvent): void => {
    const target = event.target as HTMLInputElement;
    const newAuthFormValue: Record<string, string> = {
      ...authFormData,
    };

    newAuthFormValue[target.name] = target.value;
    setAuthFormValue(newAuthFormValue);
  };

  return (
    <Popup>
      <div
        className={classes.close}
        role={ElemRole.BUTTON}
        onClick={() => toggleLoginPopup()}
      />
      <form className={classes.form}>
        <legend className={classes.title}>{t(LocalesKey.LOGIN_TITLE)}</legend>
        <p>{t(LocalesKey.LOGIN)} - admin</p>
        <p>{t(LocalesKey.PASSWORD)} - admin</p>
        <input
          onInput={updateAuthForm}
          className={classes.input}
          type={InputType.TEXT}
          name={InputName.USERNAME}
          placeholder={InputPlaceholder.LOGIN}
        />
        <input
          onInput={updateAuthForm}
          className={classes.input}
          type={InputType.PASSWORD}
          name={InputName.PASSWORD}
          placeholder={InputPlaceholder.PASSWORD}
        />
        <div className={classes.buttonsWrapper}>
          <button
            onClick={closePopup}
            className={`${classes.button} ${classes.buttonCancel}`}
            type={ElemRole.BUTTON}
          >
            {t(LocalesKey.CANCEL_BTN)}
          </button>
          <button
            onClick={sendData}
            className={`${classes.button} ${classes.buttonOk}`}
            type={ElemRole.BUTTON}
          >
            {t(LocalesKey.LOGIN_BTN)}
          </button>
        </div>
      </form>
    </Popup>
  );
};

export default LoginPopup;
