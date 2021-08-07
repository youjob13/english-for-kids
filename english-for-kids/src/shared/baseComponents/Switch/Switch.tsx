import React, { ReactElement } from 'react';
import classes from './switch.module.scss';
import { ISwitchProps } from '../../interfaces/props-models';
import {
  GameMode,
  InputType,
  SWITCH_ID,
  SwitchMode,
} from '../../globalVariables';

const Switch = ({ onCheckboxClick, gameMode }: ISwitchProps): ReactElement => {
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
        data-label-on={SwitchMode.PLAY}
        data-label-off={SwitchMode.TRAIN}
      />
    </label>
  );
};

export default Switch;
