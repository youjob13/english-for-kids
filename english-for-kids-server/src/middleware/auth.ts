import jwt from 'jsonwebtoken';
import { NextFunction, Response } from 'express';
import sessions from '../storage/sessions';
import { RequestType } from '../shared/interfaces/api-models';
import { RequestMethod, ResponseAuthMessage, ResponseStatus } from '../shared/globalVariables';

const { secret } = require('../config');

function checkAuth(req: RequestType, res: Response, next: NextFunction) {
  if (req.method === RequestMethod.OPTIONS) {
    next();
  }

  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(ResponseStatus.FORBIDDEN).json({message: ResponseAuthMessage.NOT_TOKEN});
    }

    const auth = sessions.find((session) => session === token);
    if (!auth) {
      return res.status(ResponseStatus.FORBIDDEN).json({message: ResponseAuthMessage.NOT_AUTH});
    }

    const decodedData = jwt.verify(token, secret);
    req.user = decodedData;

    next();
  } catch (error) {
    return res.status(ResponseStatus.FORBIDDEN).json({statusText: error});
  }
}

module.exports = {
  authMiddleware: checkAuth,
};
