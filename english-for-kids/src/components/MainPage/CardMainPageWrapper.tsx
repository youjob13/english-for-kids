import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import {
  GameMode,
  ICardMainPageWrapperProps,
} from '../../shared/interfaces/props-models';

const CardMainPageWrapper = ({
  category,
  cards,
  gameMode,
}: ICardMainPageWrapperProps): ReactElement => {
  return (
    <li>
      <Link to={`/section/${category}`}>
        <Card
          title={category}
          isReadyToStartedGame={gameMode === GameMode.READY_TO_GAME}
          imageSRC={cards[0].imageSRC}
        />
      </Link>
    </li>
  );
};

export default CardMainPageWrapper;
