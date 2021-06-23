import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import { selectCategory } from '../../store/cardsSlice';

// TODO: rewrite with hoc
const CardCategoryWrapper = (props: any): ReactElement => {
  const { card, onCardCategoryClick } = props;

  const onLinkClick = () => {
    onCardCategoryClick(card.category);
  };

  return (
    <Link onClick={onLinkClick} to="category">
      <Card title={card.category} image={card.cards[0]} />
    </Link>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onCardCategoryClick: (categoryName: string) =>
    dispatch(selectCategory(categoryName)),
});

export default connect(null, mapDispatchToProps)(CardCategoryWrapper);
