import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import classes from './category.module.scss';
import { GameAndCardsReducerType } from '../../shared/interfaces/store-models';
import { ICategoryProps } from '../../shared/interfaces/props-models';
import CardCategoryWrapper from './CardCategoryWrapper';
import { ICardsData } from '../../shared/interfaces/cards-models';
import { RouteParams } from '../../shared/interfaces/api-models';

const Category = ({
  cardsData,
  isReadyToStartedGame,
}: ICategoryProps): ReactElement => {
  const { category: categoryPath } = useParams<RouteParams>();

  const currentCategoryCards: ICardsData | undefined = cardsData.find(
    (cardsDatItem) => Object.keys(cardsDatItem).toString() === categoryPath
  );

  return (
    <>
      <ul className={classes.categoryField}>
        {Object.values(currentCategoryCards!)[0].map((card, index) => (
          <CardCategoryWrapper key={index.toString()} card={card} />
        ))}
      </ul>
      {isReadyToStartedGame && <button type="button">Start Game</button>}
    </>
  );
};

const mapStateToProps = (state: GameAndCardsReducerType) => ({
  cardsData: state.cardsReducer.cards,
  isReadyToStartedGame: state.gameReducer.isReadyToStartedGame,
});

export default connect(mapStateToProps)(Category);
