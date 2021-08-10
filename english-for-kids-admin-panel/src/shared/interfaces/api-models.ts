import { Request } from 'express';
import jwt from 'jsonwebtoken';
import WordStatistic from '../../models/WordStatistics';

export interface RequestType extends Request {
  user: string | jwt.JwtPayload;
}

export interface IWord {
  _id: string;
  name: string;
  imageSRC: string;
  translate: string;
  audioSRC: string;
}

export interface ICategory {
  _id: number;
  category: string;
  words: IWord[];
}

export interface IToken {
  token: string;
}

export interface ResponseWords {
  object: string,
  totalPageCount: number,
  data: ICategory
}

export interface ResponseMessage { message: string }

export type IWordStatistics = typeof WordStatistic;

export interface MulterFiles {
  [fieldname: string]: Express.Multer.File[]
}
