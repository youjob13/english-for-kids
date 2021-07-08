import { FIRST_LETTER, SECOND_LETTER } from '../globalVariables';

const capitalizeWord = (word: string): string => {
  return `${word[FIRST_LETTER].toUpperCase()}${word.substr(SECOND_LETTER)}`;
};
export default capitalizeWord;
