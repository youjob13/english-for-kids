const capitalizeWord = (word: string): string => {
  return `${word[0].toUpperCase()}${word.substr(1)}`;
};
export default capitalizeWord;
