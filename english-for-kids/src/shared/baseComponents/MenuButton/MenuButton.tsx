import React, { ReactElement, useContext } from 'react';
import {
  LABEL_STYLES,
  MENU_BTN_ACTIVE_STYLES,
  MENU_BTN_SPAN,
  MENU_BTN_STYLES,
} from '../../stylesVariables';
import MenuContext from '../../context';
import { InputType, MENU_BUTTON_ID } from '../../globalVariables';

const MenuButton = (): ReactElement => {
  const { isOpenMenu, toggleMenu } = useContext(MenuContext);

  return (
    <label className={LABEL_STYLES} htmlFor={MENU_BUTTON_ID}>
      <input
        className={isOpenMenu ? MENU_BTN_ACTIVE_STYLES : MENU_BTN_STYLES}
        onChange={toggleMenu}
        type={InputType.CHECKBOX}
        id={MENU_BUTTON_ID}
      />
      <span className={MENU_BTN_SPAN} />
      <span className={MENU_BTN_SPAN} />
      <span className={MENU_BTN_SPAN} />
    </label>
  );
};

export default MenuButton;
