import React, { ReactElement } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classes from './navigation.module.scss';
import { selectCategory } from '../../../store/cardsSlice';
import { ICardsData } from '../../../shared/interfaces/cards-models';
import NavigationItem from './NavigationItem';
import { CardsReducerType } from '../../../shared/interfaces/store-models';
import { INavigationProps } from '../../../shared/interfaces/props-models';

const Navigation = (props: INavigationProps): ReactElement => {
  const { cards, onCardCategoryClick } = props;

  const onLinkClick = (category: string) => {
    onCardCategoryClick(category);
  };

  return (
    <nav className={classes.navMenu}>
      <ul>
        <li>
          <NavLink
            onClick={() => onLinkClick('')}
            to="main"
            className={classes.navItem}
          >
            Main page
          </NavLink>
        </li>
        {cards.map((card: ICardsData, index: number) => (
          <NavigationItem
            key={index.toString()}
            title={card.category}
            onLinkClick={onLinkClick}
          />
        ))}
      </ul>
    </nav>
  );
};

const mapStateToProps = (state: CardsReducerType) => ({
  cards: state.cardsReducer.cards,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onCardCategoryClick: (categoryName: string) =>
    dispatch(selectCategory(categoryName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
