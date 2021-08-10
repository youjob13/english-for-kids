import { Request } from 'express';
import jwt from 'jsonwebtoken';
import WordStatistic from '../../models/WordStatistics';

export interface RequestType extends Request {
  user: string | jwt.JwtPayload;
}

export type IWordStatistics = typeof WordStatistic;

export interface MulterFiles {
  [fieldname: string]: Express.Multer.File[]
}
