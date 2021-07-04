import { ICardItem } from './cards-models';
import { IWordStatisticData } from './api-models';

// export type GameModeType = 'no-game' | 'in-game' | 'show-result';

export enum GameMode { // TODO: resolve problem
  NO_GAME = 'NO_GAME',
  READY_TO_GAME = 'READY_TO_GAME',
  IN_GAME = 'IN_GAME',
  SHOW_RESULT = 'SHOW_RESULT',
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

export interface IEndGamePopupProps {
  answersList: boolean[];
}

export interface ICardFrontProps {
  playCardAudio: () => void;
  title: string;
  imageSRC: string;
  isReadyToStartedGame: boolean;
  showTranslation: () => void;
}

export interface ITableCellProps {
  index: number;
  word: IWordStatisticData;
}

export interface INavigationProps {
  categories: string[];
}

export interface INavigationItemProps {
  category: string;
}

export interface ICardCategoryWrapperProps {
  card: ICardItem;
}

export interface IMenuBtnProps {
  isOpenMenu: boolean;
  onMenuBtnClick: () => void;
}

export interface ISwitchProps {
  on: string;
  off: string;
  onCheckboxClick: () => void;
}
