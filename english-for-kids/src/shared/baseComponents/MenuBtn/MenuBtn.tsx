import React, { ReactElement, useContext } from 'react';
import {
  LABEL_STYLES,
  MENU_BTN_ACTIVE_STYLES,
  MENU_BTN_STYLES,
} from '../../stylesVariables';
import MenuContext from '../../context';

const MenuBtn = (): ReactElement => {
  const { isOpenMenu, toggleMenu } = useContext(MenuContext);

  return (
    <label className={LABEL_STYLES} htmlFor="menuId">
      <input
        className={isOpenMenu ? MENU_BTN_ACTIVE_STYLES : MENU_BTN_STYLES}
        onChange={toggleMenu}
        type="checkbox"
        id="menuId"
      />
      <span />
      <span />
      <span />
    </label>
  );
};

export default MenuBtn;
