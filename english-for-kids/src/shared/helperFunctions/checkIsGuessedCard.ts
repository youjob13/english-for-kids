import { ICardItem } from '../interfaces/cards-models';

const checkIsGuessedCard = (
  currentGameCardList: ICardItem[],
  card: ICardItem
): boolean =>
  currentGameCardList.some(
    (cardFromGameList) =>
      JSON.stringify(cardFromGameList) === JSON.stringify(card)
  );

export default checkIsGuessedCard;
