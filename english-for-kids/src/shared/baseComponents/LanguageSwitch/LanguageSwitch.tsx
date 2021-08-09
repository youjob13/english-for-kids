import React, { ReactElement } from 'react';
import i18next from 'i18next';
import classes from './languageSwitch.module.scss';
import { languages } from '../../globalVariables';

const LanguageSwitch = (): ReactElement => {
  const changeAppLanguage = (countryCode: string) => {
    i18next.changeLanguage(countryCode);
  };
  return (
    <div className={classes.languageSwitch}>
      {languages.map(({ code, countryCode, name }) => (
        <button
          key={code}
          className={classes.languageSwitchButton}
          onClick={changeAppLanguage.bind(null, countryCode)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitch;
