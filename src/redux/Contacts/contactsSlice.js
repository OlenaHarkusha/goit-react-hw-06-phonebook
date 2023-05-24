import { createSlice, nanoid } from '@reduxjs/toolkit';
import { contactsInitialState } from './initialState';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: (state, action) => {
      const { name, number } = action.payload;
      return [...state, { name, number, id: nanoid() }];
    },

    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload.id);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { addContact, deleteContact } = contactsSlice.actions;
