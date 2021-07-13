import log4js from 'log4js';
import { Request, Response } from 'express';
import User from '../models/User';
import generateAccessToken from '../shared/helperFunctions/generateAccessToken';
import sessions from '../storage/sessions';

const logger = log4js.getLogger();
logger.level = 'debug';

export const logout = async (req: Request, res: Response) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(400).json({message: 'Token lost'});
    }

    const userIndex = sessions.findIndex((session) => session === authorization);

    if (!userIndex && userIndex > 0) {
      return res.status(404).json({message: 'User not founded'});
    }

    return sessions.splice(userIndex, 1);
  } catch (error) {
    return res.status(400).json({statusText: error, message: 'Logout error'});
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const {username, password} = req.body;

    if (!username || !password) {
      return res.status(400).json({message: 'Enter both username and password'});
    }

    const user = await User.findOne({username}); // TODO: проверить пароль

    if (!user) {
      return res.status(400).json({message: `User ${username} not found`});
    }

    const token = generateAccessToken(user._id, user.roles);
    sessions.push(token);

    return res.json({token});
  } catch (error) {
    return res.status(400).json({statusText: error, message: 'Authorization error'});
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    return res.json(sessions);
  } catch (error) {
    return res.status(403).json(error);
  }
};
