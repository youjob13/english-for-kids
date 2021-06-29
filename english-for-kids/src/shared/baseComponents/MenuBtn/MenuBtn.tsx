import React, { ReactElement } from 'react';
import classes from './menuBtn.module.scss';
import { IMenuBtnProps } from '../../interfaces/props-models';

const MenuBtn = ({ onMenuBtnClick }: IMenuBtnProps): ReactElement => {
  const randomId = (Date.now() + 11).toString();

  return (
    <label className={classes.label} htmlFor={randomId}>
      <input
        className={classes.inputMenuBtn}
        onChange={onMenuBtnClick}
        type="checkbox"
        id={randomId}
      />
      <span />
      <span />
      <span />
    </label>
  );
};

export default MenuBtn;
