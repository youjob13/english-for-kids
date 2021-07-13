import { ICardsData } from '../interfaces/cards-models';
import { IWordStatistic } from '../../store/statisticSlice';
import { LoginData } from '../interfaces/api-models';

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

export const authAPI = {
  async getCards(): Promise<any> {
    try {
      const response = await fetch('http://localhost:5000/auth/users', {
        method: 'GET',
        headers: {
          authorization: localStorage.token,
          'Content-Type': 'application/json;charset=utf-8',
        },
      });
      const res = await response.json();
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },
  async login(authFormData: LoginData): Promise<any> {
    try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(authFormData),
      });
      return await response.json();
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },
};

export default cardsAPI;
