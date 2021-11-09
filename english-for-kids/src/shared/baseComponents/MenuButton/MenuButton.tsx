import React, { ReactElement, useContext } from 'react';
import MenuContext from '../../context';
import { InputType, MENU_BUTTON_ID } from '../../globalVariables';
import classes from './menuButton.module.scss';

const MenuButton = (): ReactElement => {
  const { isOpenMenu, toggleMenu } = useContext(MenuContext);

  const INPUT_STYLES = isOpenMenu
    ? classes.inputMenuBtnActive
    : classes.inputMenuBtn;

  return (
    <label className={classes.label} htmlFor={MENU_BUTTON_ID}>
      <input
        className={INPUT_STYLES}
        onChange={toggleMenu}
        type={InputType.CHECKBOX}
        id={MENU_BUTTON_ID}
      />
      <span className={classes.inputMenuBtnSpan} />
      <span className={classes.inputMenuBtnSpan} />
      <span className={classes.inputMenuBtnSpan} />
    </label>
  );
};

export default MenuButton;
