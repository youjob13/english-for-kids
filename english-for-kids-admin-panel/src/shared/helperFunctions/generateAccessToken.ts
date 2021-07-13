import jwt from 'jsonwebtoken';
import Role from '../../models/Role';

const { secret } = require('../../config');

const generateAccessToken = (id: number, roles: typeof Role) => {
  const payload = {
    id, roles,
  };
  return jwt.sign(payload, secret, {expiresIn: '24h'});
};

export default generateAccessToken;
