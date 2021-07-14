import { ICardsData } from '../interfaces/cards-models';

const defineCurrentCategory = (
  cardsData: ICardsData[],
  categoryPath: string
): ICardsData | undefined =>
  cardsData.find((cardsDataItem) => cardsDataItem.category === categoryPath);

export default defineCurrentCategory;
