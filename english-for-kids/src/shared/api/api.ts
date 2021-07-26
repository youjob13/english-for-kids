import { ICardItem, ICardsData } from '../interfaces/cards-models';
import {
  ILoginResponse,
  IWordStatistic,
  LoginData,
} from '../interfaces/api-models';

export const cardsAPI = {
  async getCards(
    limit?: number,
    page?: number
  ): Promise<{ cards: ICardsData[]; totalPageCount: number }> {
    try {
      const response = await fetch(
        `http://localhost:5000/cards?limit=${limit}&page=${page}`
      );
      const result = await response.json();
      const cards: ICardsData[] = result.data;
      const { totalPageCount } = result;
      return { cards, totalPageCount };
    } catch (error) {
      throw new Error(error);
    }
  },
  async removeCard(cardId: string): Promise<void> {
    try {
      await fetch(`http://localhost:5000/cards?id=${cardId}`, {
        method: 'DELETE',
        headers: {
          authorization: localStorage.token,
          'Content-Type': 'application/json;charset=utf-8',
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  },
  async createCard(data: FormData, categoryId: string): Promise<ICardItem> {
    try {
      const response = await fetch(
        `http://localhost:5000/cards?id=${categoryId}`,
        {
          method: 'POST',
          headers: {
            Authorization: localStorage.token,
          },
          body: data,
        }
      );
      const card: ICardItem = await response.json();
      return card;
    } catch (error) {
      throw new Error(error);
    }
  },
  async updateCard(cardId: string, data: FormData): Promise<ICardItem> {
    try {
      const response = await fetch(`http://localhost:5000/cards?id=${cardId}`, {
        method: 'PUT',
        headers: {
          Authorization: localStorage.token,
        },
        body: data,
      });
      const updatedCard: ICardItem = await response.json();
      return updatedCard;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export const categoryAPI = {
  async createCategory(categoryName: string): Promise<ICardsData> {
    try {
      const response = await fetch('http://localhost:5000/category', {
        method: 'POST',
        headers: {
          authorization: localStorage.token,
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ categoryName }),
      });
      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  },
  async removeCategory(id: string): Promise<void> {
    try {
      await fetch(`http://localhost:5000/category?id=${id}`, {
        method: 'DELETE',
        headers: {
          authorization: localStorage.token,
          'Content-Type': 'application/json;charset=utf-8',
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  },
  async updateCategoryName(
    categoryId: string,
    newCategoryName: string
  ): Promise<ICardsData> {
    try {
      const response = await fetch(
        `http://localhost:5000/category?id=${categoryId}`,
        {
          method: 'PUT',
          headers: {
            Authorization: localStorage.token,
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify({ newCategoryName }),
        }
      );
      const res = await response.json();
      console.log(res);
      return res;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export const authAPI = {
  async login(authFormData: LoginData): Promise<ILoginResponse> {
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
      throw new Error(error);
    }
  },
  async logout(): Promise<void> {
    try {
      await fetch('http://localhost:5000/auth/logout', {
        method: 'DELETE',
        headers: {
          Authorization: localStorage.token,
          'Content-Type': 'application/json;charset=utf-8',
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  },
};

export const statisticsAPI = {
  async updateStatistics(
    wordId: string,
    wordStatistics: any
  ): Promise<IWordStatistic> {
    try {
      const response = await fetch('http://localhost:5000/statistics', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ wordId, wordStatistics }),
      });
      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  },
  async getWordsStatistics(): Promise<IWordStatistic[]> {
    try {
      const response = await fetch('http://localhost:5000/statistics', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      });

      const wordsStatistics = await response.json();
      return wordsStatistics;
    } catch (error) {
      throw new Error(error);
    }
  },
  async resetWordsStatistics(): Promise<void> {
    try {
      await fetch('http://localhost:5000/statistics', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  },
};

export const getWordStatistic = (wordName: string): IWordStatistic => {
  return JSON.parse(localStorage.getItem(wordName)!);
};
