import { ICardItem, ICardsData } from '../interfaces/cards-models';
import { IWordStatistic } from '../../store/statisticSlice';
import { ILoginResponse, LoginData } from '../interfaces/api-models';

export const cardsAPI = {
  async getCards(): Promise<ICardsData[]> {
    try {
      const response = await fetch('https://efk-serrver.herokuapp.com/cards');
      const cards: ICardsData[] = await response.json();
      return cards;
    } catch (error) {
      throw new Error(error);
    }
  },
  async removeCard(cardId: string, categoryId: string): Promise<void> {
    try {
      await fetch('https://efk-serrver.herokuapp.com/cards', {
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
      const response = await fetch('https://efk-serrver.herokuapp.com/cards', {
        method: 'POST',
        headers: {
          Authorization: localStorage.token,
          Category: categoryId,
        },
        body: data,
      });
      const card: ICardItem = await response.json();
      console.log(card);
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
      console.log(categoryId);
      const response = await fetch('https://efk-serrver.herokuapp.com/cards', {
        method: 'PUT',
        headers: {
          Authorization: localStorage.token,
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
      const response = await fetch(
        'https://efk-serrver.herokuapp.com/category',
        {
          method: 'POST',
          headers: {
            authorization: localStorage.token,
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify({ categoryName }),
        }
      );
      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  },
  async removeCategory(id: string): Promise<void> {
    try {
      await fetch('https://efk-serrver.herokuapp.com/category', {
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
    newCategoryName: string
  ): Promise<ICardsData> {
    try {
      console.log(newCategoryName);
      const response = await fetch(
        'https://efk-serrver.herokuapp.com/category',
        {
          method: 'PUT',
          headers: {
            Authorization: localStorage.token,
            Category: categoryId,
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify({ newCategoryName }),
        }
      );
      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  },
};

export const authAPI = {
  async login(authFormData: LoginData): Promise<ILoginResponse> {
    try {
      const response = await fetch(
        'https://efk-serrver.herokuapp.com/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify(authFormData),
        }
      );
      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  },
  async logout(): Promise<void> {
    try {
      await fetch('https://efk-serrver.herokuapp.com/auth/logout', {
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
