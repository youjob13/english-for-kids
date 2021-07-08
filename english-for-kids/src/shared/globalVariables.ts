import { ITableHeaderData, SortingTypes } from './interfaces/api-models';

const tableHeaders: ITableHeaderData[] = [
  {
    type: SortingTypes.CATEGORY,
    name: 'category',
  },
  {
    type: SortingTypes.WORD,
    name: 'word',
  },
  {
    type: SortingTypes.TRANSLATION,
    name: 'translation',
  },
  {
    type: SortingTypes.TRAIN,
    name: 'train',
  },
  {
    type: SortingTypes.HIT,
    name: 'hit',
  },
  {
    type: SortingTypes.WRONG,
    name: 'wrong',
  },
  {
    type: SortingTypes.CORRECT_ANSWERS_PERCENT,
    name: 'correct answers %',
  },
];
export default tableHeaders;

export const EMPTY_LINE = '';

export enum GameMode {
  NO_GAME = 'NO_GAME',
  READY_TO_GAME = 'READY_TO_GAME',
  IN_GAME = 'IN_GAME',
}
export enum EventName {
  MOUSEDOWN = 'mousedown',
  CLICK = 'click',
}
export enum Path {
  MAIN = '/main',
  CATEGORY = '/section/:category',
  STATISTICS = '/statistics',
  ROOT = '/',
  OTHER = '*',
}
export enum ElemRole {
  MENU = 'menu',
  BUTTON = 'button',
}
export enum InputType {
  CHECKBOX = 'checkbox',
}

export const INITIAL_IS_OPEN_MENU_VALUE = false;
export const INITIAL_REF_NAV_VALUE = null;

export const SWITCH_ON = 'Play';
export const SWITCH_OFF = 'TRAIN';
export const SECTION = 'section';
export const FIRST_LETTER = 0;
export const SECOND_LETTER = 1;
export const MENU_BUTTON_ID = 'menuButtonID';
export const FIRST_ELEMENT = 0;
