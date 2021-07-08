import React, { ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from './Navigation/Navigation';
import { toggleGameMode } from '../../store/gameSlice';
import {
  CardsReducerType,
  GameReducerType,
} from '../../shared/interfaces/store-models';
import Switch from '../../shared/baseComponents/Switch/Switch';
import MenuButton from '../../shared/baseComponents/MenuButton/MenuButton';
import MenuContext from '../../shared/context';
import {
  INITIAL_IS_OPEN_MENU_VALUE,
  SWITCH_OFF,
  SWITCH_ON,
} from '../../shared/globalVariables';
import { HEADER } from '../../shared/stylesVariables';

const Header = (): ReactElement => {
  const [isOpenMenu, toggleMenu] = useState(INITIAL_IS_OPEN_MENU_VALUE);
  const dispatch = useDispatch();
  const { cardsData } = useSelector(
    (state: CardsReducerType) => state.cardsReducer
  );
  const { gameMode } = useSelector(
    (state: GameReducerType) => state.gameReducer
  );

  const categoryNames = cardsData.map((cardData) =>
    Object.keys(cardData).toString()
  );

  const switchGameMode = () => {
    dispatch(toggleGameMode());
  };

  const toggleMenuMode = () => {
    toggleMenu(!isOpenMenu);
  };

  return (
    <MenuContext.Provider value={{ isOpenMenu, toggleMenu: toggleMenuMode }}>
      <header className={HEADER}>
        <Navigation categories={categoryNames} />
        <MenuButton />
        <Switch
          on={SWITCH_ON}
          off={SWITCH_OFF}
          gameMode={gameMode}
          onCheckboxClick={switchGameMode}
        />
      </header>
    </MenuContext.Provider>
  );
};

export default Header;
