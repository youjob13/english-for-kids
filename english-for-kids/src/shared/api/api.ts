import { ICardsData } from '../interfaces/cards-models';
import { IWordStatistic } from '../../store/statisticSlice';

const cardsAPI = {
  baseURL: '../../cards.json',

  async getCards(): Promise<ICardsData[]> {
    const response = await fetch(this.baseURL);
    const cards: ICardsData[] = await response.json();
    return cards;
  },
};

export const getWordStatistic = (wordName: string): IWordStatistic => {
  return JSON.parse(localStorage.getItem(wordName)!);
};

export default cardsAPI;
