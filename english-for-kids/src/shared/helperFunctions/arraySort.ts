import { IWord } from '../interfaces/cards-models';

const sortCurrentGameQuestionList = ([...cards]: IWord[]): IWord[] => {
  return cards.sort(() => Math.random() - 0.5);
};

export default sortCurrentGameQuestionList;
