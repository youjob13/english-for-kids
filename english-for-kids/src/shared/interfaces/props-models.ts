import { ICardItem } from './cards-models';
import { IWordStatisticData } from './api-models';
import { GameMode } from '../globalVariables';

export interface ICardMainPageWrapperProps {
  cards: ICardItem[];
  category: string;
  gameMode: GameMode;
}

export interface ICardAdminFront {
  categoryId: number;
  id: string;
  name: string;
  translate: string;
  audioSRC: string;
  imageSRC: string;
  toggleEditMode: (isEditMode: boolean) => void;
}

export interface ICardWithEditProps {
  name: string;
  translate: string;
  toggleEditMode: (isEditMode: boolean) => void;
}

export interface ICardProps {
  title: string;
  imageSRC: string;
  isReadyToStartedGame: boolean;
}

export interface IEndGamePopupProps {
  answerList: boolean[];
}

export interface IAnswerProps {
  image: string;
}

export interface IAnswerListProps {
  answerList: boolean[];
}

export interface ICardFrontProps {
  playCardAudio: () => void;
  title: string;
  imageSRC: string;
  showTranslation: () => void;
}

export interface ITableCellProps {
  index: number;
  word: IWordStatisticData;
}

export interface INavigationProps {
  categories: string[];
}

export interface IHeaderProps {
  isOpenLoginPopup: boolean;
  setIsOpenLoginPopup: (setIsOpenLoginPopup: boolean) => void;
}

export interface INavigationItemProps {
  category: string;
}

export interface ICardCategoryWrapperProps {
  card: ICardItem;
}

export interface ISwitchProps {
  on: string;
  off: string;
  onCheckboxClick: () => void;
  gameMode: GameMode;
}
