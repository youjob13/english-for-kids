import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import { ICardMainPageWrapperProps } from '../../shared/interfaces/props-models';
import { GameReducerType } from '../../shared/interfaces/store-models';

// TODO: rewrite with hoc
const CardMainPageWrapper = ({
  card,
  isStartedGame,
}: ICardMainPageWrapperProps): ReactElement => {
  return (
    <Link to={`/section/${card.category}`}>
      <Card
        title={card.category}
        isStartedGame={isStartedGame}
        imageSRC={card.cards[0].imageSRC}
      />
    </Link>
  );
};

const mapStateToProps = (state: GameReducerType) => ({
  isStartedGame: state.gameReducer.isStartedGame,
});

export default connect(mapStateToProps)(CardMainPageWrapper);
