import { FormEvent } from 'react';
import { IWord, ICardsData } from './cards-models';
import { IWordStatisticData } from './api-models';
import { GameMode, Path } from '../globalVariables';

export interface INewCategoryForm {
  flipCard: () => void;
}

export interface ICategoriesProps {
  gameCards: IWord[];
  currentQuestion: IWord | null;
}

export interface IAdminCategoryProps {
  id: string;
  cardsCount: number;
  category: string;
}

export interface ICategoryEditModeProps {
  updateCategoryName: (event: FormEvent) => void;
  toggleEditCategoryMode: () => void;
  createNewCategory: () => void;
  categoryName: string;
}

export interface ICategoryFrontSideProps {
  toggleEditCategoryMode: () => void;
  categoryName: string;
}

export interface ICardForm {
  submitForm: (formData: FormData) => void;
  updateInputValue: (event: FormEvent) => void;
  closeForm: () => void;
  wordData: { name: string; translate: string };
}

export interface IAddItem {
  addItem: () => void;
  text: string;
}

export interface INewWordProps {
  categoryId: string;
}

export interface ICardEditProps {
  word: IWord;
  categoryId: string;
}

export interface ICardMainPageWrapperProps {
  words: IWord[];
  category: string;
  gameMode: GameMode;
}

export interface ICardAdminFront {
  categoryId: string;
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
  categoryId: string;
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
  gameMode: GameMode;
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

export interface ICategoryControlsProps {
  gameMode: GameMode;
  onStartGameClick: () => void;
  onSoundPlayButtonClick: () => void;
}

export interface ICardCategoryWrapperProps {
  word: IWord;
  currentQuestion: IWord | null;
}

export interface IAdminNavigationItemProps {
  name: string;
  path: Path;
}

export interface ISwitchProps {
  on: string;
  off: string;
  onCheckboxClick: () => void;
  gameMode: GameMode;
}
