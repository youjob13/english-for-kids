import { Request } from 'express';
import jwt from 'jsonwebtoken';

export interface RequestType extends Request {
  user: string | jwt.JwtPayload;
}
