import { ICardItem, ICardsData } from './cards-models';

// export type GameModeType = 'no-game' | 'in-game' | 'show-result';

// eslint-disable-next-line no-shadow
export enum GameMode { // TODO: resolve problem
  // eslint-disable-next-line no-unused-vars
  NO_GAME = 'NO_GAME',
  // eslint-disable-next-line no-unused-vars
  READY_TO_GAME = 'READY_TO_GAME',
  // eslint-disable-next-line no-unused-vars
  IN_GAME = 'IN_GAME',
  // eslint-disable-next-line no-unused-vars
  SHOW_RESULT = 'SHOW_RESULT',
}

export interface IAppProps {
  gameMode: GameMode;
}

export interface IMainPageProps {
  cardsData: ICardsData[];
  gameMode: GameMode;
}

export interface ICardMainPageWrapperProps {
  cards: ICardItem[];
  category: string;
  gameMode: GameMode;
}

export interface ICardProps {
  title: string;
  imageSRC: string;
  isReadyToStartedGame: boolean;
}

export interface ICategoryProps {
  // eslint-disable-next-line no-unused-vars
  giveAnswer: (card: ICardItem) => void; // TODO: resolve problem
  // eslint-disable-next-line no-unused-vars
  startNewGame: (cards: ICardItem[]) => void;
  cardsData: ICardsData[];
  currentGameCardList: ICardItem[];
  currentQuestion: ICardItem | any;
  gameMode: GameMode;
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
  // eslint-disable-next-line no-unused-vars
  giveAnswer: (card: ICardItem) => void; // TODO: resolbe problem
  card: ICardItem;
  currentGameCardList: ICardItem[];
  gameMode: GameMode;
}

export interface IMenuBtnProps {
  onMenuBtnClick: () => void;
}

export interface ISwitchProps {
  on: string;
  off: string;
  onCheckboxClick: () => void;
}
