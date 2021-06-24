import { ICard } from './cards-models';

export interface IMainPageProps {
  cards: ICard[];
}

export interface ICardCategoryWrapperProps {
  card: ICard;
  onCardCategoryClick: (category: string) => void;
}

export interface ICardProps {
  title: string;
  image: string;
}

export interface ICategoryProps {
  selectedCategory: ICard;
}

export interface INavigationProps {
  cards: ICard[];
  onCardCategoryClick: (category: string) => void;
}

export interface INavigationItemProps {
  title: string;
  onLinkClick: (title: string) => void;
}
