import {
  AuthFormValue,
  ITableHeaderData,
  SortingTypes,
} from './interfaces/api-models';

export const APP_WRAPPER_STYLES = 'app-wrapper';
export const APP_CONTENT_STYLES = 'app-content';

export const baseUrl = 'https://efk-serrver.herokuapp.com/';
export const wordsUrl = 'words';
export const categoryUrl = 'category';
export const authLoginUrl = 'auth/login';
export const authLogoutUrl = 'auth/logout';
export const statisticsUrl = 'statistics';
export const baseName = '/React';
export const rootElementID = 'root';
export const booleanStateValueDefault = false;
export const rightAnswerSound = '/assets/success.mp3';
export const failAnswerSound = '/assets/error.mp3';
export const NewCategoryText = 'Create new Category';
export const PageNotFound = '404 Not Found';

export enum StatisticsParam {
  TRAIN = 'train',
  WRONG = 'wrong',
  HIT = 'hit',
}

export const languages = [
  {
    code: 'en',
    name: 'En',
    countryCode: 'en',
  },
  {
    code: 'ru',
    name: 'Ru',
    countryCode: 'ru',
  },
];

const tableHeaders: ITableHeaderData[] = [
  {
    type: SortingTypes.WORD,
    name: 'word',
  },
  {
    type: SortingTypes.TRANSLATION,
    name: 'translation',
  },
  {
    type: SortingTypes.CATEGORY,
    name: 'category',
  },
  {
    type: SortingTypes.HIT,
    name: 'hit',
  },
  {
    type: SortingTypes.TRAIN,
    name: 'train',
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

export enum QueryParam {
  LIMIT = 'limit',
  PAGE = 'page',
  ID = 'id',
}

export enum Slice {
  AUTH = 'authSlice',
  GAME = 'gameSlice',
  STATISTICS = 'statisticsSlice',
  WORDS = 'wordsSlice',
  DIFFICULT_WORDS = 'difficultWordsSlice',
}

export enum HTTPMethods {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE',
}

export enum ContentType {
  APP_JSON = 'application/json;charset=utf-8',
}

export enum GameMode {
  NO_GAME = 'NO_GAME',
  READY_TO_GAME = 'READY_TO_GAME',
  IN_GAME = 'IN_GAME',
}

export enum EventName {
  MOUSEDOWN = 'mousedown',
}

export enum LocalesKey {
  CATEGORY_TITLE = 'category_title',
  START_GAME = 'start_game',
  REPEAT_WORD = 'repeat_word',
  MAIN = 'main',
  STATISTICS = 'statistics',
  LOGIN_BTN = 'login_btn',
  MAIN_TITLE = 'Train_&_Play',
  EMPTY_CATEGORY = 'category_empty',
  REPEAT_DIFF_WORDS = 'repeat_difficult_words',
  LOGIN_TITLE = 'login_title',
  LOGIN = 'login',
  PASSWORD = 'password',
  CANCEL_BTN = 'cancel_btn',
  SWITCH_PLAY = 'switch_play',
  SWITCH_TRAIN = 'switch_train',
}

export enum Path {
  GAME = '/',
  CATEGORY = '/section/:category',
  STATISTICS = '/statistics',
  DIFFICULT_WORDS = 'difficult-words',
  ROOT = '/',
  ADMIN_PANEL_CATEGORIES = '/admin-panel/categories',
  ADMIN_PANEL_WORD = '/admin-panel/categories/:category',
  ADMIN_PANEL_ROOT = '/admin-panel',
  OTHER = '*',
}
export const initialAuthFormValue: Record<AuthFormValue, string> = {
  username: EMPTY_LINE,
  password: EMPTY_LINE,
};

export enum ElemRole {
  MENU = 'menu',
  BUTTON = 'button',
  SUBMIT = 'submit',
}

export enum InputType {
  CHECKBOX = 'checkbox',
  TEXT = 'text',
  FILE = 'file',
  PASSWORD = 'password',
}

export enum InputName {
  WORD_NAME = 'wordName',
  WORD_TRANSLATION = 'wordTranslation',
  SOUND = 'sound',
  IMAGE = 'image',
  USERNAME = 'username',
  PASSWORD = 'password',
}

export enum InputPlaceholder {
  LOGIN = 'Login',
  PASSWORD = 'Password',
}

export enum InputAccept {
  AUDIO = 'audio/*',
  IMAGE = 'image/*',
}

export enum AddCardText {
  WORD = 'Create new Word',
}

export enum SortProp {
  CATEGORY = 'category',
  WORD_NAME = 'wordName',
  TRANSLATION = 'translation',
}

export enum ImageDescription {
  SPEAKER = 'speaker',
  ARROWS = 'rotate arrows',
  STAR = 'star',
  GITHUB = 'GitHub',
  RS_SCHOOL = 'RS School',
}

export enum Target {
  BLANK = '_blank',
}

export const INITIAL_IS_OPEN_MENU_VALUE = false;
export const INITIAL_REF_NAV_VALUE = null;

export const SECTION = 'section';
export const MENU_BUTTON_ID = 'menuButtonID';
export const SWITCH_ID = 'switchBtn';
export const FIRST_ELEMENT = 0;
export const AUDIO_IS_MISSING = 'Audio lost';
export const SIX_CHARACTERS = 6;
export const WORD_NAME = 'wordName';
export const WORD_TRANSLATION = 'wordTranslation';
export const TWO_SECOND_DELAY = 2000;
export const THREE_SECOND_DELAY = 3000;
export const RIGHT_ANSWER_IMAGE = `${process.env.PUBLIC_URL}/assets/star.webp`;
export const FAIL_ANSWER_IMAGE = `${process.env.PUBLIC_URL}/assets/lose_star.png`;
export const MY_GITHUB = 'https://github.com/youjob13';
export const RS_SCHOOL = 'https://rs.school/js/';
export const WIN_POPUP_SOUND = '/assets/win.mp3';
export const LOSE_POPUP_SOUND = '/assets/lose.mp3';
export const WIN_POPUP_IMAGE = `${process.env.PUBLIC_URL}/assets/cool.png`;
export const LOSE_POPUP_IMAGE = `${process.env.PUBLIC_URL}/assets/fail.png`;
export const TOKEN = 'token';
export const SHOWN_STARS_LIMIT = 10;

export const navigationAdminPanel = [
  {
    name: 'categories',
    path: Path.ADMIN_PANEL_CATEGORIES,
  },
  {
    name: 'words',
    path: Path.ADMIN_PANEL_WORD,
  },
];
export const wordDataInitialState = {
  name: EMPTY_LINE,
  translate: EMPTY_LINE,
};
