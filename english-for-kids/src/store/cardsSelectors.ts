import { ICardsState } from '../shared/interfaces/store-models';

const getCardsData = (state: ICardsState) => state.cards;
export default getCardsData;
