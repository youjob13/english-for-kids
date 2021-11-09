import { IWord } from '../interfaces/cards-models';

const compareAnswerAndQuestion = (
  answer: IWord,
  question: IWord | null
): boolean => answer._id === question?._id;

export default compareAnswerAndQuestion;
