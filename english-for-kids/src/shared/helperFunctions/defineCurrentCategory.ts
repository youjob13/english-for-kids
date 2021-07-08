import { ICardsData } from '../interfaces/cards-models';

const defineCurrentCategory = (
  cardsData: ICardsData[],
  categoryPath: string
): ICardsData | undefined =>
  cardsData.find(
    (cardsDataItem) => Object.keys(cardsDataItem).toString() === categoryPath
  );

export default defineCurrentCategory;
