import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import { ICardMainPageWrapperProps } from '../../shared/interfaces/props-models';

// TODO: rewrite with hoc
const CardMainPageWrapper = ({
  category,
  cards,
  isStartedGame,
}: ICardMainPageWrapperProps): ReactElement => {
  return (
    <Link to={`/section/${category}`}>
      <Card
        title={category}
        isStartedGame={isStartedGame}
        imageSRC={cards[0].imageSRC}
      />
    </Link>
  );
};

export default CardMainPageWrapper;
