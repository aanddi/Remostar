import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

// eslint-disable-next-line import/no-named-as-default
import citysSlice from './slices/citys.slice';

export const store = configureStore({
  reducer: { citys: citysSlice },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
