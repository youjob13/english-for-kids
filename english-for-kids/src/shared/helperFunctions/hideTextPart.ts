const hideTextPart = (text: string, length: number): string => {
  return `${text.substring(0, length)}...`;
};

export default hideTextPart;
