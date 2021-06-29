import React, { ReactElement } from 'react';
import classes from './switch.module.scss';
import { ISwitchProps } from '../../interfaces/props-models';

const Switch = ({
  on = 'on',
  off = 'on',
  onCheckboxClick,
}: ISwitchProps): ReactElement => {
  const randomId = Date.now().toString();

  return (
    <label htmlFor={randomId} className={classes.checkboxGreen}>
      <input
        className={classes.inputSwitch}
        onChange={onCheckboxClick}
        id={randomId}
        type="checkbox"
      />
      <span
        className={classes.checkboxGreenSwitch}
        data-label-on={on}
        data-label-off={off}
      />
    </label>
  );
};

export default Switch;
