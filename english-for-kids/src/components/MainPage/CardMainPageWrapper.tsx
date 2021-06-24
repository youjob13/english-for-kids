import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import { selectCategory } from '../../store/cardsSlice';
import { ICardMainPageWrapperProps } from '../../shared/interfaces/props-models';

// TODO: rewrite with hoc
const CardMainPageWrapper = ({
  card,
  onCardCategoryClick,
}: ICardMainPageWrapperProps): ReactElement => {
  const onLinkClick = () => {
    onCardCategoryClick(card.category);
  };
  console.log(card);
  return (
    <Link onClick={onLinkClick} to="category">
      <Card title={card.category} image={card.cards[0].imageSRC} />
    </Link>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onCardCategoryClick: (categoryName: string) =>
    dispatch(selectCategory(categoryName)),
});

export default connect(null, mapDispatchToProps)(CardMainPageWrapper);
