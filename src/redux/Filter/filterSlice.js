import { createSlice } from '@reduxjs/toolkit';
import { filterInitialState } from './initialState';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload.toLowerCase();
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { filterContacts } = filterSlice.actions;
