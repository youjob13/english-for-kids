import { FormEvent } from 'react';
import { IFormState, IWordData } from '../interfaces/api-models';

const typeNewWordData = (
  event: FormEvent,
  updateWordData: (prevState: IFormState) => void
) => {
  const target = event.target as HTMLInputElement;

  if (target.name === 'wordName') {
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
