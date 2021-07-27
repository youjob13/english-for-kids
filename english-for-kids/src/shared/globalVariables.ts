import { ITableHeaderData, SortingTypes } from './interfaces/api-models';

export const baseName = '/React';
export const rootElementID = 'root';
export const booleanStateValueDefault = false;

export const guardMeta = { auth: true };

export enum StatisticsParam {
  TRAIN = 'train',
  WRONG = 'wrong',
  HIT = 'hit',
}

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
  ADMIN_PANEL_CATEGORIES = '/admin-panel/categories',
  ADMIN_PANEL_WORD = '/admin-panel/categories/:category',
  ADMIN_PANEL_ROOT = '/admin-panel',
  OTHER = '*',
}
export enum ElemRole {
  MENU = 'menu',
  BUTTON = 'button',
  SUBMIT = 'submit',
  ROW = 'row',
}
export enum InputType {
  CHECKBOX = 'checkbox',
  TEXT = 'text',
  FILE = 'file',
}
export enum InputName {
  WORD_NAME = 'wordName',
  WORD_TRANSLATION = 'wordTranslation',
  SOUND = 'sound',
  IMAGE = 'image',
}
export enum InputAccept {
  AUDIO = 'audio/*',
  IMAGE = 'image/*',
}

export enum AddCardText {
  WORD = 'Create new Word',
}

export enum ImageDescription {
  SPEAKER = 'speaker',
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
export const AUDIO_IS_MISSING = 'Audio lost';
export const SIX_CHARACTERS = 6;
export const WORD_NAME = 'wordName';
export const WORD_TRANSLATION = 'wordTranslation';
export const TWO_SECOND_DELAY = 2000;

export const navigationAdminPanel = [
  {
    name: 'categories',
    path: Path.ADMIN_PANEL_CATEGORIES,
  },
  {
    name: 'words',
    path: Path.ROOT,
  },
];
export const wordDataInitialState = {
  name: EMPTY_LINE,
  translate: EMPTY_LINE,
};
