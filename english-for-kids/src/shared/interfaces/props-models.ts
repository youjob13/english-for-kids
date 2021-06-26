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
  cardsData: ICardsData[];
  isReadyToStartedGame: boolean;
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
  card: ICardItem;
  isReadyToStartedGame: boolean;
}
