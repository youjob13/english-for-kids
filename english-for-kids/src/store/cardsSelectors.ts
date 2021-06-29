import { ICardsState } from '../shared/interfaces/store-models';
import { ICardsData } from '../shared/interfaces/cards-models';

const getCardsData = (state: ICardsState): ICardsData[] => state.cards;
export default getCardsData;
