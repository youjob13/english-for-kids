import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ElemRole,
  GameMode,
  LocalesKey,
} from '../../../../shared/globalVariables';
import { ICategoryControlsProps } from '../../../../shared/interfaces/props-models';
import classes from './gameControls.module.scss';

const GameControls = ({
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
          {t(LocalesKey.START_GAME)}
        </button>
      )}
      {gameMode === GameMode.IN_GAME && (
        <button
          className={classes.repeatWord}
          type={ElemRole.BUTTON}
          onClick={onSoundPlayButtonClick}
        >
          {t(LocalesKey.REPEAT_WORD)}
        </button>
      )}
    </>
  );
};

export default GameControls;
