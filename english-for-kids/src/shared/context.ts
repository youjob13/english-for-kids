import { createContext } from 'react';
import { booleanStateValueDefault } from './globalVariables';

const MenuContext = createContext({
  isOpenMenu: booleanStateValueDefault,
  toggleMenu: () => {
    console.log('menu mode is switched');
  },
});

export const LoginContext = createContext({
  isOpenLoginPopup: booleanStateValueDefault,
  toggleLoginPopup: () => {
    console.log('login popup mode is switched');
  },
});

export default MenuContext;
