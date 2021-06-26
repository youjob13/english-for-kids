import { ICardItem, ICardsData } from './cards-models';

export interface IMainPageProps {
  cardsData: ICardsData[];
  isReadyToStartedGame: boolean;
}

export interface ICardMainPageWrapperProps {
  cards: ICardItem[];
  category: string;
  isReadyToStartedGame: boolean;
}

export interface ICardProps {
  title: string;
  imageSRC: string;
  isReadyToStartedGame: boolean;
}

export interface ICategoryProps {
  giveAnswer: (card: ICardItem) => void;
  startNewGame: (cards: ICardItem[]) => void;
  cardsData: ICardsData[];
  currentQuestion: ICardItem | any;
  isReadyToStartedGame: boolean;
  isStartedGame: boolean;
}

export interface INavigationProps {
  cards: ICardsData[];
}

export interface INavigationItemProps {
  category: string;
}

export interface IHeaderProps {
  pressBtnChangeGameMode: () => void;
  cards: ICardsData[];
}

export interface ICardCategoryWrapperProps {
  giveAnswer: (card: ICardItem) => void;
  card: ICardItem;
  isReadyToStartedGame: boolean;
}
