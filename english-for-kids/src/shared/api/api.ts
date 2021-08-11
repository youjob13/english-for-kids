import { IWord, ICardsData } from '../interfaces/cards-models';
import {
  ILoginResponse,
  IWordStatistic,
  IWordStatisticsRequest,
  LoginData,
} from '../interfaces/api-models';
import {
  authUrl,
  baseUrl,
  wordsUrl,
  categoryUrl,
  ContentType,
  HTTPMethods,
  statisticsUrl,
} from '../globalVariables';

export const cardsAPI = {
  async getWords(
    limit?: number,
    page?: number
  ): Promise<{ words: ICardsData[]; totalPageCount: number }> {
    try {
      const response = await fetch(
        `${baseUrl}${wordsUrl}?limit=${limit}&page=${page}`
      );
      const result = await response.json();
      const words: ICardsData[] = result.data;
      const { totalPageCount } = result;

      return { words, totalPageCount };
    } catch (error) {
      throw new Error(error);
    }
  },
  async removeWord(cardId: string): Promise<void> {
    try {
      await fetch(`${baseUrl}${wordsUrl}?id=${cardId}`, {
        method: HTTPMethods.DELETE,
        headers: {
          authorization: localStorage.token,
          'Content-Type': ContentType.APP_JSON,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  },
  async createWord(data: FormData, categoryId: string): Promise<IWord> {
    try {
      const response = await fetch(`${baseUrl}${wordsUrl}?id=${categoryId}`, {
        method: HTTPMethods.POST,
        headers: {
          Authorization: localStorage.token,
        },
        body: data,
      });
      const card: IWord = await response.json();
      return card;
    } catch (error) {
      throw new Error(error);
    }
  },
  async updateWord(cardId: string, data: FormData): Promise<IWord> {
    try {
      const response = await fetch(`${baseUrl}${wordsUrl}?id=${cardId}`, {
        method: HTTPMethods.PUT,
        headers: {
          Authorization: localStorage.token,
        },
        body: data,
      });
      const updatedCard: IWord = await response.json();
      return updatedCard;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export const categoryAPI = {
  async createCategory(categoryName: string): Promise<ICardsData> {
    try {
      const response = await fetch(`${baseUrl}${categoryUrl}`, {
        method: HTTPMethods.POST,
        headers: {
          authorization: localStorage.token,
          'Content-Type': ContentType.APP_JSON,
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
      await fetch(`${baseUrl}${categoryUrl}?id=${id}`, {
        method: HTTPMethods.DELETE,
        headers: {
          authorization: localStorage.token,
          'Content-Type': ContentType.APP_JSON,
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
        `${baseUrl}${categoryUrl}?id=${categoryId}`,
        {
          method: HTTPMethods.PUT,
          headers: {
            Authorization: localStorage.token,
            'Content-Type': ContentType.APP_JSON,
          },
          body: JSON.stringify({ newCategoryName }),
        }
      );
      const res = await response.json();
      return res;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export const authAPI = {
  async login(authFormData: LoginData): Promise<ILoginResponse> {
    try {
      const response = await fetch(`${baseUrl}${authUrl}/login`, {
        method: HTTPMethods.POST,
        headers: {
          'Content-Type': ContentType.APP_JSON,
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
      await fetch(`${baseUrl}${authUrl}/logout`, {
        method: HTTPMethods.DELETE,
        headers: {
          Authorization: localStorage.token,
          'Content-Type': ContentType.APP_JSON,
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
    wordStatistics: IWordStatisticsRequest
  ): Promise<IWordStatistic> {
    try {
      const response = await fetch(`${baseUrl}${statisticsUrl}`, {
        method: HTTPMethods.PUT,
        headers: {
          'Content-Type': ContentType.APP_JSON,
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
      const response = await fetch(`${baseUrl}${statisticsUrl}`, {
        method: HTTPMethods.GET,
        headers: {
          'Content-Type': ContentType.APP_JSON,
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
      await fetch(`${baseUrl}${statisticsUrl}`, {
        method: HTTPMethods.DELETE,
        headers: {
          'Content-Type': ContentType.APP_JSON,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  },
};
