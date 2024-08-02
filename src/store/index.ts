import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

import citys from './slices/citys.slice';

export const store = configureStore({
  reducer: { citys },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
