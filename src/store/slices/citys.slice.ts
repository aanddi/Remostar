import { createSlice } from '@reduxjs/toolkit';

interface State {
  city: string;
}

const initialState: State = {
  city: 'Симферополь',
};

export const citysSlice = createSlice({
  name: 'citys',
  initialState,
  reducers: {
    set: (_state, actions) => {
      const state = _state;
      const newCity = actions.payload;

      return {
        ...state,
        ...newCity,
      };
    },
  },
});

export const { set } = citysSlice.actions;

export default citysSlice.reducer;
