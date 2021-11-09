import { AnyAction, ThunkAction } from '@reduxjs/toolkit';
import { IAuthState } from '../interfaces/store-models';
import { toggleAuthMode } from '../../store/authSlice';

const checkAuthorize =
  (): ThunkAction<void, IAuthState, unknown, AnyAction> =>
  async (dispatch): Promise<void> => {
    if (localStorage.token) {
      dispatch(toggleAuthMode());
    }
  };

export default checkAuthorize;
