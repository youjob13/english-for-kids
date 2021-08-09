import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { ElemRole, GameMode } from '../../../../shared/globalVariables';
import { ICategoryControlsProps } from '../../../../shared/interfaces/props-models';
import classes from '../category.module.scss';

const CategoryControls = ({
  gameMode,
  onStartGameClick,
  onSoundPlayButtonClick,
}: ICategoryControlsProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <>
      {gameMode === GameMode.READY_TO_GAME && (
        <button
          className={classes.startGame}
          type={ElemRole.BUTTON}
          onClick={onStartGameClick}
        >
          {t('start_game')}
        </button>
      )}
      {gameMode === GameMode.IN_GAME && (
        <button
          className={classes.repeatWord}
          type={ElemRole.BUTTON}
          onClick={onSoundPlayButtonClick}
        >
          {t('repeat_word')}
        </button>
      )}
    </>
  );
};

export default CategoryControls;
