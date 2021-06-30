import React, { ReactElement } from 'react';
import classes from './menuBtn.module.scss';
import { IMenuBtnProps } from '../../interfaces/props-models';

const LABEL_STYLES = classes.label;
const MENU_BTN_STYLES = classes.inputMenuBtn;

const MenuBtn = ({ onMenuBtnClick }: IMenuBtnProps): ReactElement => {
  const randomId = (Date.now() + 11).toString();

  return (
    <label className={LABEL_STYLES} htmlFor={randomId}>
      <input
        className={MENU_BTN_STYLES}
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
