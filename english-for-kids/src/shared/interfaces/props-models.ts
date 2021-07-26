import { FormEvent } from 'react';
import { ICardItem, ICardsData } from './cards-models';
import { IWordStatisticData } from './api-models';
import { GameMode } from '../globalVariables';

export interface INewCategoryForm {
  flipCard: () => void;
}

export interface ICardForm {
  submitForm: (formData: any) => void;
  updateInputValue: (event: FormEvent) => void;
  closeForm: () => void;
  wordName: string;
  translationName: string;
}

export interface IAddItem {
  addItem: () => void;
  text: string;
}

export interface ICardMainPageWrapperProps {
  cards: ICardItem[];
  category: string;
  gameMode: GameMode;
}

export interface ICardAdminFront {
  categoryId: number;
  _id: string;
  name: string;
  translate: string;
  audioSRC: string;
  imageSRC: string;
  toggleEditMode: (isEditMode: boolean) => void;
}

export interface ICardsProps {
  cardsData: ICardsData[];
}

export interface ICardWithEditProps {
  categoryId: number;
  _id: string;
  name: string;
  audioSRC: string;
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
  currentQuestion: ICardItem | null;
}

export interface ISwitchProps {
  on: string;
  off: string;
  onCheckboxClick: () => void;
  gameMode: GameMode;
}
