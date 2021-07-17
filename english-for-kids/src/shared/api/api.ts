import { ICardItem, ICardsData } from '../interfaces/cards-models';
import { IWordStatistic } from '../../store/statisticSlice';
import { ILoginResponse, LoginData } from '../interfaces/api-models';

export const cardsAPI = {
  async getCards(): Promise<ICardsData[]> {
    try {
      const response = await fetch('http://localhost:5000/cards');
      const cards: ICardsData[] = await response.json();
      return cards;
    } catch (error) {
      throw new Error(error);
    }
  },
  async removeCard(cardId: string, categoryId: string): Promise<void> {
    try {
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
  async createCard(data: FormData, categoryId: string): Promise<ICardItem> {
    try {
      const response = await fetch('http://localhost:5000/cards', {
        method: 'POST',
        headers: {
          Authorization: localStorage.token,
          Category: categoryId,
        },
        body: data,
      });
      const card: ICardItem = await response.json();
      return card;
    } catch (error) {
      throw new Error(error);
    }
  },
  async updateCard(
    cardId: string,
    categoryId: string,
    data: FormData
  ): Promise<ICardItem> {
    try {
      const response = await fetch('http://localhost:5000/cards', {
        method: 'PUT',
        headers: {
          Authorization: localStorage.token,
          Category: categoryId,
          Card: cardId,
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
      await fetch('http://localhost:5000/category', {
        method: 'DELETE',
        headers: {
          authorization: localStorage.token,
          Category: id,
          'Content-Type': 'application/json;charset=utf-8',
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  },
  async updateCategoryName(
    categoryId: string,
    data: {
      prevCategoryName: string;
      newCategoryName: string;
    }
  ): Promise<ICardsData> {
    try {
      const response = await fetch('http://localhost:5000/category', {
        method: 'PUT',
        headers: {
          Authorization: localStorage.token,
          Category: categoryId,
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ ...data }),
      });
      return await response.json();
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
          authorization: localStorage.token,
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
