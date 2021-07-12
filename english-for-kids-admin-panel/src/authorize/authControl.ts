import User from '../models/User';
import config from '../config';
import Role from '../models/Role';

export const sessions: any[] = [];

// eslint-disable-next-line @typescript-eslint/no-var-requires
const jwt = require('jsonwebtoken');

const generateAccessToken = (id: number, roles: typeof Role) => {
  const payload = {
    id, roles,
  };
  return jwt.sign(payload, config.secret, {expiresIn: '24h'});
};

const login = async (req: any, res: any) => {
  try {
    const {username, password} = req.body;

    if (!username || !password) {
      return res.status(400).json({message: 'Enter both username and password'});
    }

    const user = await User.findOne({username}); // TODO: проверить пароль

    if (!user) {
      return res.status(400).json({message: `User ${username} not found`});
    }

    // eslint-disable-next-line no-underscore-dangle
    const token = generateAccessToken(user._id, user.roles);
    sessions.push(token);
    return res.json({token});
  } catch (error) {
    console.log(error);
    return res.status(400).json({message: 'Authorization error'});
  }
};
export default login;

export const getUsers = async (req: any, res: any) => {
  try {
    return res.json(sessions);
  } catch (error) {
    return res.status(403).json(error);
  }
};
