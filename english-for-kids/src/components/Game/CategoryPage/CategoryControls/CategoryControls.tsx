import React, { ReactElement } from 'react';
import { ElemRole, GameMode } from '../../../../shared/globalVariables';
import { ICategoryControlsProps } from '../../../../shared/interfaces/props-models';
import classes from '../category.module.scss';

const CategoryControls = ({
  gameMode,
  onStartGameClick,
  onSoundPlayButtonClick,
}: ICategoryControlsProps): ReactElement => (
  <>
    {gameMode === GameMode.READY_TO_GAME && (
      <button
        className={classes.startGame}
        type={ElemRole.BUTTON}
        onClick={onStartGameClick}
      >
        Start Game
      </button>
    )}
    {gameMode === GameMode.IN_GAME && (
      <button
        className={classes.repeatWord}
        type={ElemRole.BUTTON}
        onClick={onSoundPlayButtonClick}
      >
        Repeat
      </button>
    )}
  </>
);

export default CategoryControls;
