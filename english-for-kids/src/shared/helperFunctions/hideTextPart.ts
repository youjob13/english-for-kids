const hideTextPart = (text: unknown, length: number): string =>
  `${String(text).substring(0, length)}...`;

export default hideTextPart;
