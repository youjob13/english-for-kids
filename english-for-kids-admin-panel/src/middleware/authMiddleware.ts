import config from '../config';
import {sessions} from '../authorize/authControl';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const jwt = require('jsonwebtoken');

// eslint-disable-next-line consistent-return
module.exports = function (req: any, res: any, next: any) {
  if (req.method === 'OPTIONS') {
    next();
  }

  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(403).json({message: 'User not authorize'});
    }
    const auth = sessions.find((session) => session === token);
    if (!auth) {
      return res.status(403).json({message: 'User not authorize'});
    }
    const decodedData = jwt.verify(token, config.secret);
    req.user = decodedData;
    next();
  } catch (error) {
    return res.status(403).json({message: error});
  }
};
