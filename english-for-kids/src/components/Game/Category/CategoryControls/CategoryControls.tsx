import React, { ReactElement } from 'react';
import { ElemRole, GameMode } from '../../../../shared/globalVariables';
import {
  REPEAT_WORD_STYLES,
  START_GAME_STYLES,
} from '../../../../shared/stylesVariables';
import { ICategoryControlsProps } from '../../../../shared/interfaces/props-models';

const CategoryControls = ({
  gameMode,
  onStartGameClick,
  onSoundPlayButtonClick,
}: ICategoryControlsProps): ReactElement => (
  <>
    {gameMode === GameMode.READY_TO_GAME && (
      <button
        className={START_GAME_STYLES}
        type={ElemRole.BUTTON}
        onClick={onStartGameClick}
      >
        Start Game
      </button>
    )}
    {gameMode === GameMode.IN_GAME && (
      <button
        className={REPEAT_WORD_STYLES}
        type={ElemRole.BUTTON}
        onClick={onSoundPlayButtonClick}
      >
        Repeat
      </button>
    )}
  </>
);

export default CategoryControls;
