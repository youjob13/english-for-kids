const calcPercentByCondition = (
  firstValue: number,
  secondValue: number
): number => Math.floor((secondValue * 100) / (firstValue + secondValue));

export default calcPercentByCondition;
