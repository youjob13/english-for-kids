import { FormEvent } from 'react';
import { IFormState, IWordData } from '../interfaces/api-models';
import { InputName } from '../globalVariables';

const typeNewWordData = (
  event: FormEvent,
  updateWordData: (prevState: IFormState) => void
): void => {
  const target = event.target as HTMLInputElement;

  if (target.name === InputName.WORD_NAME) {
    updateWordData((prevState: IWordData) => ({
      ...prevState,
      name: target.value,
    }));
  } else {
    updateWordData((prevState: IWordData) => ({
      ...prevState,
      translate: target.value,
    }));
  }
};

export default typeNewWordData;
