import React, { ReactElement } from 'react';
import { CATEGORY_FIELD_STYLES } from '../../../../shared/stylesVariables';
import CardWrapperInGame from './CardGame/CardWrapperInGame';
import { ICategoriesProps } from '../../../../shared/interfaces/props-models';

const Categories = ({
  gameCards,
  currentQuestion,
}: ICategoriesProps): ReactElement => (
  <ul className={CATEGORY_FIELD_STYLES}>
    {!gameCards.length ? (
      <div>Category is empty</div>
    ) : (
      gameCards.map((word, index) => (
        <CardWrapperInGame
          key={index.toString()}
          word={word}
          currentQuestion={currentQuestion}
        />
      ))
    )}
  </ul>
);

export default Categories;
