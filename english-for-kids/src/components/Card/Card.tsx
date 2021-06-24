import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import classes from './card.module.scss';
import img from '../../../public/assets/category/animals/cat.jpg';
import { ICardProps } from '../../shared/interfaces/props-models';
import { GameReducerType } from '../../shared/interfaces/store-models';

// enum CardStyles {
//   CardName = classes.cardName,
//   CardBGPlay = `${classes.card} ${classes.isStartedGame}`,
//   CardBGTrain = classes.card,
// }

const Card = ({ title, image, isStartedGame }: ICardProps): ReactElement => (
  <li
    className={
      isStartedGame ? `${classes.card} ${classes.isStartedGame}` : classes.card
    }
  >
    <img
      className={classes.cardImage}
      src={image} // TODO: remove !
      alt=""
    />
    <p className={classes.cardName}>{title}</p>
  </li>
);

const mapStateToProps = (state: GameReducerType) => ({
  isStartedGame: state.gameReducer.isStartedGame,
});

export default connect(mapStateToProps)(Card);
