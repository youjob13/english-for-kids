import jwt from 'jsonwebtoken';
import { NextFunction, Response } from 'express';
import sessions from '../storage/sessions';
import { RequestType } from '../shared/interfaces/api-models';

const { secret } = require('../config');

// eslint-disable-next-line consistent-return
function authMiddleware(req: RequestType, res: Response, next: NextFunction) {
  if (req.method === 'OPTIONS') {
    next();
  }

  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(403).json({message: 'User not auth'});
    }

    const auth = sessions.find((session) => session === token);
    if (!auth) {
      return res.status(403).json({message: 'User not auth'});
    }

    const decodedData = jwt.verify(token, secret);
    req.user = decodedData;

    next();
  } catch (error) {
    return res.status(403).json({statusText: error, message: 'Error'});
  }
}

module.exports = {
  authMiddleware,
};
