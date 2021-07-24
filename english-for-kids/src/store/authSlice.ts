import { AnyAction, createSlice, ThunkAction } from '@reduxjs/toolkit';
import { IAuthState } from '../shared/interfaces/store-models';
import { authAPI } from '../shared/api/api';
import { LoginData } from '../shared/interfaces/api-models';

const authSlice = createSlice({
  name: 'authSlice',
  initialState: {
    isAuth: false,
  } as IAuthState,
  reducers: {
    toggleAuthMode: (state: IAuthState) => ({
      ...state,
      isAuth: !state.isAuth,
    }),
  },
});

export default authSlice.reducer;

export const { toggleAuthMode } = authSlice.actions;

export const getAuthorize =
  (
    authFormData: LoginData
  ): ThunkAction<void, IAuthState, unknown, AnyAction> =>
  async (dispatch): Promise<void> => {
    const authResponse = await authAPI.login(authFormData);

    if (!authResponse.token) {
      console.log(authResponse.message); // TODO: handle error
      return;
    }

    localStorage.token = authResponse.token;
    dispatch(toggleAuthMode());
  };

// TODO: think about
export const checkAuthorize =
  (): ThunkAction<void, IAuthState, unknown, AnyAction> =>
  async (dispatch): Promise<void> => {
    if (localStorage.token) {
      dispatch(toggleAuthMode());
    }
  };

export const logoutUser =
  (): ThunkAction<void, IAuthState, unknown, AnyAction> =>
  async (dispatch): Promise<void> => {
    localStorage.removeItem('token');
    await authAPI.logout();
    dispatch(toggleAuthMode());
  };
