import { ICardsData } from '../interfaces/cards-models';
import { IWordStatistic } from '../../store/statisticSlice';
import { LoginData } from '../interfaces/api-models';

export const cardsAPI = {
  baseURL: '../../cards.json',

  async getCards(): Promise<ICardsData[]> {
    try {
      const response = await fetch('http://localhost:5000/cards');
      const cards: ICardsData[] = await response.json();
      return cards;
    } catch (error) {
      throw new Error(error);
    }
  },
  async removeCard(cardId: string, categoryId: string): Promise<any> {
    try {
      console.log(cardId, categoryId);
      await fetch('http://localhost:5000/cards', {
        method: 'DELETE',
        headers: {
          authorization: localStorage.token,
          card: cardId,
          category: categoryId,
          'Content-Type': 'application/json;charset=utf-8',
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  },
  async updateCategoryName(data: {
    prevCategoryName: string;
    newCategoryName: string;
  }): Promise<any> {
    // TODO: category API
    try {
      const response = await fetch('http://localhost:5000/category', {
        method: 'PUT',
        headers: {
          authorization: localStorage.token,
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ ...data }),
      });
      const cards: ICardsData[] = await response.json();
      return cards;
    } catch (error) {
      throw new Error(error);
    }
  },
  async removeCategory(id: number): Promise<void> {
    try {
      await fetch('http://localhost:5000/category', {
        method: 'DELETE',
        headers: {
          authorization: localStorage.token,
          Category: id.toString(),
          'Content-Type': 'application/json;charset=utf-8',
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  },
};

export const authAPI = {
  async login(authFormData: LoginData): Promise<any> {
    try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          authorization: localStorage.token,
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(authFormData),
      });
      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  },
  async logout(): Promise<void> {
    try {
      const response = await fetch('http://localhost:5000/auth/logout', {
        method: 'DELETE',
        headers: {
          authorization: localStorage.token,
          'Content-Type': 'application/json;charset=utf-8',
        },
      });
      console.log(response);
    } catch (error) {
      throw new Error(error);
    }
  },
};

export const getWordStatistic = (wordName: string): IWordStatistic => {
  return JSON.parse(localStorage.getItem(wordName)!);
};
