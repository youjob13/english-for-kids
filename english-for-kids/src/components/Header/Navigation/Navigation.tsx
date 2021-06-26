import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import classes from './navigation.module.scss';
import NavigationItem from './NavigationItem';
import { CardsReducerType } from '../../../shared/interfaces/store-models';
import { INavigationProps } from '../../../shared/interfaces/props-models';

const Navigation = ({ cards }: INavigationProps): ReactElement => {
  return (
    <nav className={classes.navMenu}>
      <ul>
        <li>
          <NavLink to="/main" className={classes.navItem}>
            Main page
          </NavLink>
        </li>
        {cards.map((card, index) => (
          <NavigationItem key={index.toString()} category={card.category} />
        ))}
      </ul>
    </nav>
  );
};

const mapStateToProps = (state: CardsReducerType) => ({
  cards: state.cardsReducer.cards,
});

export default connect(mapStateToProps)(Navigation);
