import React, { ReactElement, useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  AuthReducerType,
  CardsReducerType,
} from '../../../shared/interfaces/store-models';
import { FIRST_ELEMENT, Path } from '../../../shared/globalVariables';
import { LoginContext } from '../../../shared/context';

const CardsField = (): ReactElement => {
  const history = useHistory();
  const { toggleLoginPopup } = useContext(LoginContext);
  const { isAuth } = useSelector((state: AuthReducerType) => state.authReducer);

  useEffect(() => {
    if (!isAuth) {
      history.push(Path.MAIN);
      toggleLoginPopup();
    }
  }, []);

  const { cardsData } = useSelector(
    (state: CardsReducerType) => state.cardsReducer
  );

  return (
    <div>
      wsa
      {cardsData.map((cardData) => {
        const category = Object.keys(cardData).toString();
        const cards = Object.values(cardData)[FIRST_ELEMENT];
        return `${category} ${cards}`;
      })}
    </div>
  );
};

export default CardsField;
