import { ICardItem } from '../interfaces/cards-models'; // TODO: do with generic type!

const compareAnswerAndQuestion = (
  answer: ICardItem,
  question: ICardItem | null
): boolean => {
  return JSON.stringify(answer) === JSON.stringify(question);
};

export default compareAnswerAndQuestion;
