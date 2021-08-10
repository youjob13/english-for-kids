import { Request, Response } from 'express';
import User from '../models/User';
import generateAccessToken from '../shared/helperFunctions/generateAccessToken';
import sessions from '../storage/sessions';
import { ResponseErrorAuth, ResponseStatus } from '../shared/globalVariables';
import { IToken, ResponseMessage } from '../shared/interfaces/api-models';

export const logout = async (req: Request, res: Response): Promise<Response<string | ResponseMessage>> => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(ResponseStatus.BAD_REQUEST).json({ message: ResponseErrorAuth.TOKEN_LOST });
    }

    const userIndex = sessions.findIndex((session) => session === authorization);

    if (!userIndex && userIndex > 0) {
      return res.status(ResponseStatus.NOT_FOUND).json({ message: ResponseErrorAuth.USER_NOT_FOUNDED });
    }

    sessions.splice(userIndex, 1);
    return res.json({message: ResponseErrorAuth.USER_LOGOUT});
  } catch (error) {
    return res.status(ResponseStatus.BAD_REQUEST).json({ message: error });
  }
};

export const login = async (req: Request, res: Response): Promise<Response<IToken | ResponseMessage>> => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(ResponseStatus.BAD_REQUEST).json({ message: ResponseErrorAuth.INCOMPLETE_AUTH_DATA });
    }

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(ResponseStatus.BAD_REQUEST).json({ message: `User ${username} not found` });
    }

    if (user.password !== password) {
      return res.status(ResponseStatus.BAD_REQUEST).json({ message: ResponseErrorAuth.INCORRECT_PASSWORD });
    }

    const token = generateAccessToken(user._id, user.roles);
    sessions.push(token);

    return res.json({ token });
  } catch (error) {
    return res.status(ResponseStatus.BAD_REQUEST).json({ message: error });
  }
};
