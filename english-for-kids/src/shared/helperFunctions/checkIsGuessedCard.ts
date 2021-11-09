import { IWord } from '../interfaces/cards-models';

const checkIsGuessedCard = (
  currentGameCardList: IWord[],
  card: IWord
): boolean =>
  currentGameCardList.some(
    (cardFromGameList) => cardFromGameList._id === card._id
  );

export default checkIsGuessedCard;
