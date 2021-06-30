import React, { ReactElement } from 'react';
import classes from './switch.module.scss';
import { ISwitchProps } from '../../interfaces/props-models';

const INPUT_SWITCH_STYLES = classes.inputSwitch;
const CHECKBOX_STYLES = classes.checkbox;
const CHECKBOX_SWITCH_STYLES = classes.checkboxSwitch;

const Switch = ({
  on = 'on',
  off = 'on',
  onCheckboxClick,
}: ISwitchProps): ReactElement => {
  const randomId = Date.now().toString();

  return (
    <label htmlFor={randomId} className={CHECKBOX_STYLES}>
      <input
        className={INPUT_SWITCH_STYLES}
        onChange={onCheckboxClick}
        id={randomId}
        type="checkbox"
      />
      <span
        className={CHECKBOX_SWITCH_STYLES}
        data-label-on={on}
        data-label-off={off}
      />
    </label>
  );
};

export default Switch;
