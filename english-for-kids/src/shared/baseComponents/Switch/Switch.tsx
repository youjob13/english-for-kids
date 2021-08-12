import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './switch.module.scss';
import { ISwitchProps } from '../../interfaces/props-models';
import {
  GameMode,
  InputType,
  LocalesKey,
  SWITCH_ID,
} from '../../globalVariables';

const Switch = ({ onCheckboxClick, gameMode }: ISwitchProps): ReactElement => {
  const { t } = useTranslation();
  const INPUT_STYLES =
    gameMode === GameMode.NO_GAME
      ? classes.inputSwitch
      : classes.inputSwitchActive;

  return (
    <label htmlFor={SWITCH_ID} className={classes.checkbox}>
      <input
        className={INPUT_STYLES}
        onChange={onCheckboxClick}
        id={SWITCH_ID}
        type={InputType.CHECKBOX}
      />
      <span
        className={classes.checkboxSwitch}
        data-label-on={t(LocalesKey.SWITCH_PLAY)}
        data-label-off={t(LocalesKey.SWITCH_TRAIN)}
      />
    </label>
  );
};

export default Switch;
