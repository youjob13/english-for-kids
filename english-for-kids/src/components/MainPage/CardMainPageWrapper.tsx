import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import { ICardMainPageWrapperProps } from '../../shared/interfaces/props-models';
import { GameReducerType } from '../../shared/interfaces/store-models';

// TODO: rewrite with hoc
const CardMainPageWrapper = ({
  category,
  cards,
  isStartedGame,
}: ICardMainPageWrapperProps | any): ReactElement => {
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

const mapStateToProps = (state: GameReducerType) => ({
  isStartedGame: state.gameReducer.isStartedGame,
});

export default connect(mapStateToProps)(CardMainPageWrapper);
