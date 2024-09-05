import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IAuthResponse, User } from '@common/api/services/auth/types/user.type';
import { deleteAuthTokens, setAuthTokens } from '@common/utils';
import getLocalStorage from '@common/utils/localStorage/getLocalStorage';

export interface IInitialState {
  user: User | null;
}

const initialState: IInitialState = {
  user: getLocalStorage('user'),
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (_state, action: PayloadAction<IAuthResponse>) => {
      setAuthTokens(action.payload.accessToken, action.payload.refreshToken);
      return {
        ..._state,
        user: action.payload.user,
      };
    },

    logoutUser: () => {
      deleteAuthTokens();
      return {
        user: null,
      };
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
