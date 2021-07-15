import React, { ReactElement } from 'react';
import classes from './card.module.scss';
import { ICardWithEditProps } from '../../../../shared/interfaces/props-models';

const CardBack = ({
  name,
  translate,
  toggleEditMode,
}: ICardWithEditProps): ReactElement => {
  const flipCardToFront = () => {
    toggleEditMode(false);
  };

  return (
    <div className={classes.cardAdminBack}>
      <form>
        <label className={classes.cardAdminLabel} htmlFor="cardName">
          Word <input id="cardName" type="text" value={name} />
        </label>
        <label className={classes.cardAdminLabel} htmlFor="cardTranslation">
          Translation
          <input id="cardTranslation" type="text" value={translate} />
        </label>
        <strong>Sound:</strong> <input type="file" />
        <strong>Image:</strong> <input type="file" />
        <div className={classes.cardAdminButtons}>
          <button
            onClick={flipCardToFront}
            className={classes.cardAdminButton}
            type="button"
          >
            Cancel
          </button>
          <button className={classes.cardAdminButton} type="button">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default CardBack;
