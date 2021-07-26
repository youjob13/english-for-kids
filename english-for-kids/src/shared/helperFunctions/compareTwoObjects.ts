import { ICardItem } from '../interfaces/cards-models'; // TODO: do with generic type!

const compareAnswerAndQuestion = (
  answer: ICardItem,
  question: ICardItem | null
): boolean => {
  return answer._id === question?._id;
};

export default compareAnswerAndQuestion;
