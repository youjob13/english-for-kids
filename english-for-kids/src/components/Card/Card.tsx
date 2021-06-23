import React, { ReactElement } from 'react';
import classes from './card.module.scss';
import img from '../../../public/assets/category/animals/cat.jpg';

const Card = (props: any): ReactElement => {
  const { title, image } = props;

  return (
    <li className={classes.card}>
      <img
        className={classes.cardImage}
        src={image} // TODO: remove !
        alt=""
      />
      <p className={classes.cardName}>{title}</p>
    </li>
  );
};

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//   onCardClick: (categoryName: string) => dispatch(selectCategory(categoryName)),
// });
//
export default Card; /* connect(null, mapDispatchToProps)(Card); */
