import { Request, Response } from 'express';
import User from '../models/User';
import generateAccessToken from '../shared/helperFunctions/generateAccessToken';
import sessions from '../storage/sessions';

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

    const user = await User.findOne({username});

    if (!user) {
      return res.status(400).json({message: `User ${username} not found`});
    }

    if (user.password !== password) {
      return res.status(400).json({message: 'Password incorrect'});
    }

    const token = generateAccessToken(user._id, user.roles);
    sessions.push(token);

    return res.json({token});
  } catch (error) {
    return res.status(400).json({statusText: error, message: 'Authorization error'});
  }
};
