import { createContext } from 'react';
import { booleanStateValueDefault } from './globalVariables';

const MenuContext = createContext({
  isOpenMenu: booleanStateValueDefault,
  toggleMenu: () => {},
});

export const LoginContext = createContext({
  isOpenLoginPopup: booleanStateValueDefault,
  toggleLoginPopup: () => {},
});

export default MenuContext;
