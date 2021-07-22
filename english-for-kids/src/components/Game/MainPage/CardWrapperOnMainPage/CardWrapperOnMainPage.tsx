import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../Card/Card';
import { ICardMainPageWrapperProps } from '../../../../shared/interfaces/props-models';
import {
  FIRST_ELEMENT,
  GameMode,
  SECTION,
} from '../../../../shared/globalVariables';
import EmptyCategory from '../EmptyCategory/EmptyCategory';

const CardWrapperOnMainPage = ({
  category,
  cards,
  gameMode,
}: ICardMainPageWrapperProps): ReactElement => (
  <li>
    {!cards.length ? (
      <EmptyCategory />
    ) : (
      <Link to={`/${SECTION}/${category}`}>
        <Card
          title={category}
          isReadyToStartedGame={gameMode === GameMode.READY_TO_GAME}
          imageSRC={cards[FIRST_ELEMENT].imageSRC}
        />
      </Link>
    )}
  </li>
);

export default CardWrapperOnMainPage;
