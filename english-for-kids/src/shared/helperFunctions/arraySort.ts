import { ICardItem } from '../interfaces/cards-models';

const sortCurrentGameQuestionList = ([...cards]: ICardItem[]): ICardItem[] => {
  return cards.sort(() => Math.random() - 0.5);
};

export default sortCurrentGameQuestionList;
