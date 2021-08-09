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
  Path,
} from '../../../shared/globalVariables';
import { AuthReducerType } from '../../../shared/interfaces/store-models';
import classes from './loginPopup.module.scss';

const LoginPopup = (): ReactElement => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { toggleLoginPopup } = useContext(LoginContext);
  const { isAuth } = useSelector((state: AuthReducerType) => state.authReducer);
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

  const updateAuthForm = (event: FormEvent) => {
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
        <legend className={classes.title}>{t('login_title')}</legend>
        <p>{t('login')} - admin</p>
        <p>{t('password')} - admin</p>
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
            {t('cancel_btn')}
          </button>
          <button
            onClick={sendData}
            className={`${classes.button} ${classes.buttonOk}`}
            type={ElemRole.BUTTON}
          >
            {t('login_btn')}
          </button>
        </div>
      </form>
    </Popup>
  );
};

export default LoginPopup;
