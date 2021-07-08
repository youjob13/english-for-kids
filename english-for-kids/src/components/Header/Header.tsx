import React, { ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './header.module.scss';
import Navigation from './Navigation/Navigation';
import { toggleGameMode } from '../../store/gameSlice';
import {
  CardsReducerType,
  GameReducerType,
} from '../../shared/interfaces/store-models';
import Switch from '../../shared/baseComponents/Switch/Switch';
import MenuBtn from '../../shared/baseComponents/MenuBtn/MenuBtn';
import MenuContext from '../../shared/context';

const Header = (): ReactElement => {
  const [isOpenMenu, toggleMenu] = useState(false);
  const dispatch = useDispatch();
  const { cards } = useSelector(
    (state: CardsReducerType) => state.cardsReducer
  );
  const { gameMode } = useSelector(
    (state: GameReducerType) => state.gameReducer
  );

  const cardsCategories = cards.map((card) => Object.keys(card).toString());

  const onSwitchClick = () => {
    dispatch(toggleGameMode());
  };

  const toggleMenuMode = () => {
    toggleMenu(!isOpenMenu);
  };

  return (
    <MenuContext.Provider value={{ isOpenMenu, toggleMenu: toggleMenuMode }}>
      <header className={classes.header}>
        <Navigation categories={cardsCategories} />
        <MenuBtn />
        <Switch
          on="Play"
          off="Train"
          gameMode={gameMode}
          onCheckboxClick={onSwitchClick}
        />
      </header>
    </MenuContext.Provider>
  );
};

export default Header;
