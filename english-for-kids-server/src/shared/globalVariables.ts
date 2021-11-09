import path from 'path';

export enum RouterPath {
  ROOT = '/',
  AUTH = '/auth',
  WORDS = '/words',
  CATEGORY = '/category',
  STATISTICS = '/statistics',
  SWAGGER = '/api-docs',
}
export enum AuthRouterPath {
  LOGIN = '/login',
  LOGOUT = '/logout',
}

export enum ResponseErrorAuth {
  TOKEN_LOST = 'Token lost',
  USER_NOT_FOUNDED = 'User not founded',
  USER_LOGOUT = 'User logout',
  INCOMPLETE_AUTH_DATA = 'Enter both username and password',
  INCORRECT_PASSWORD = 'Password incorrect',
}
export enum ResponseWordsMessage {
  NOT_WORD_ID = 'Not enough data: (word id)',
  WORD_DELETED = 'Word deleted',
  NOT_CATEGORY_ID = 'Not enough data: (category id)',
}
export enum ResponseCategoryMessage {
  NOT_CATEGORY_NAME = 'Not enough data: (category name)',
  NOT_CATEGORY_NAME_OR_ID = 'Not enough data: (new category name | category id)',
  NOT_CATEGORY_ID = 'Not enough data: (category id)',
  CATEGORY_DELETED = 'Category deleted',
}
export enum ResponseAuthMessage {
  NOT_TOKEN = 'Token is not found',
  NOT_AUTH = 'User not auth',
}
export enum ResponseStatisticsMessage {
  RESET = 'Statistics reset',
}

export enum RequestMethod {
  OPTIONS = 'OPTIONS',
}

export enum CategoryProp {
  WORDS = 'words',
}

export enum ResponseStatus {
  OK = 200,
  BAD_REQUEST = 400,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
}

export enum Model {
  CATEGORY = 'Category',
  WORD = 'Word',
  ROLE = 'Role',
  USER = 'User',
  WORD_STATISTICS = 'WordStatistics',
}

export enum FileFieldName {
  IMAGE = 'image',
  SOUND = 'sound',
}

export const publicPath = path.resolve(__dirname, '../public');
export const PORT = process.env.PORT || 5000;
export const MongoDBURL = 'mongodb+srv://admin:admin@cluster0.5deel.mongodb.net/english-for-kids?retryWrites=true&w=majority';
export const MongoDBOptions = {
  useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true,
};
export const ServerStartedMessage = `Server started on ${PORT}`;
export const List = 'list';
export const MulterDestination = 'public/';
export const User = 'USER';
export const EMPTY_LINE = '';
export const Video = 'video';
