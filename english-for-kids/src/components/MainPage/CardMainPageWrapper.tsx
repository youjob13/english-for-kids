import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import { ICardMainPageWrapperProps } from '../../shared/interfaces/props-models';

// TODO: rewrite with hoc
const CardMainPageWrapper = ({
  category,
  cards,
  isReadyToStartedGame,
}: ICardMainPageWrapperProps): ReactElement => {
  return (
    <Link to={`/section/${category}`}>
      <Card
        title={category}
        isReadyToStartedGame={isReadyToStartedGame}
        imageSRC={cards[0].imageSRC}
      />
    </Link>
  );
};

export default CardMainPageWrapper;
