import { createContext } from 'react';

const MenuContext = createContext({
  isOpenMenu: true,
  toggleMenu: () => {
    console.log('menu mode is switched');
  },
});

export default MenuContext;
