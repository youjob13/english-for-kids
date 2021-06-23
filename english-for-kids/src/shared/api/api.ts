import { ICard } from '../interfaces/cards-models';

const cardsAPI = {
  baseURL: '../../cards.json',

  async getCards(): Promise<ICard[]> {
    const response = await fetch(this.baseURL);
    const cards: ICard[] = await response.json();
    return cards;
  },
};

export default cardsAPI;
