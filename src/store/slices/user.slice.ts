import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { User } from '@common/api/services/auth/types/user.type';
import { deleteAuthTokens } from '@common/utils';
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
    setUser: (_state, action: PayloadAction<User>) => {
      return {
        ..._state,
        user: action.payload,
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

export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
