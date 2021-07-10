import { createContext } from 'react';

const MenuContext = createContext({
  isOpenMenu: true,
  toggleMenu: () => {
    console.log('menu mode is switched');
  },
});

export const LoginContext = createContext({
  isOpenLoginPopup: true,
  toggleLoginPopup: () => {
    console.log('menu mode is switched');
  },
});

export default MenuContext;
