import { ICardItem, ICardsData } from './cards-models';

export interface IMainPageProps {
  cards: ICardsData[];
}

export interface ICardMainPageWrapperProps {
  card: ICardsData;
  onCardCategoryClick: (category: string) => void;
}

export interface ICardProps {
  title: string;
  image: string;
  isStartedGame: boolean;
}

export interface ICategoryProps {
  selectedCategory: ICardsData;
}

export interface INavigationProps {
  cards: ICardsData[];
  onCardCategoryClick: (category: string) => void;
}

export interface INavigationItemProps {
  title: string;
  onLinkClick: (title: string) => void;
}

export interface IHeaderProps {
  pressBtnChangeGameMode: () => void;
}

export interface ICardCategoryWrapperProps {
  card: ICardItem;
  isStartedGame: boolean;
}
