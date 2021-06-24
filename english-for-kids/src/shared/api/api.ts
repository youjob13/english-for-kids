import { ICardsData } from '../interfaces/cards-models';

const cardsAPI = {
  baseURL: '../../cards.json',

  async getCards(): Promise<ICardsData[]> {
    const response = await fetch(this.baseURL);
    const cards: ICardsData[] = await response.json();
    return cards;
  },
};

export default cardsAPI;
