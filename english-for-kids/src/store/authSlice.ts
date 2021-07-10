import { AnyAction, createSlice, ThunkAction } from '@reduxjs/toolkit';
import { IAuthState } from '../shared/interfaces/store-models';
import { authAPI } from '../shared/api/api';
import { LoginData } from '../shared/interfaces/api-models';

const authSlice = createSlice({
  name: 'authSlice',
  initialState: {
    isAuthorize: false,
  } as IAuthState,
  reducers: {},
});

export default authSlice.reducer;

// export const {} = authSlice.actions;

export const getAuthorize =
  (
    authFormData: LoginData
  ): ThunkAction<void, IAuthState, unknown, AnyAction> =>
  async (): Promise<void> => {
    const authorizeResponse = await authAPI.login(authFormData);

    if (!authorizeResponse.token) {
      console.log(authorizeResponse.message);
    }
    localStorage.token = authorizeResponse.token;

    console.log(authorizeResponse.token);
  };
