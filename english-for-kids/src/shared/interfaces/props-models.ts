import { ICardItem, ICardsData } from './cards-models';

export interface IMainPageProps {
  cards: ICardsData[];
}

export interface ICardMainPageWrapperProps {
  card: ICardsData;
  isStartedGame: boolean;
}

export interface ICardProps {
  title: string;
  imageSRC: string;
  isStartedGame: boolean;
}

export interface ICategoryProps {
  cardsData: ICardsData;
}

export interface INavigationProps {
  cards: ICardsData[];
}

export interface INavigationItemProps {
  category: string;
}

export interface IHeaderProps {
  pressBtnChangeGameMode: () => void;
}

export interface ICardCategoryWrapperProps {
  card: ICardItem;
  isStartedGame: boolean;
}
