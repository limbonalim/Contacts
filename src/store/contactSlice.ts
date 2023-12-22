import {createSlice} from '@reduxjs/toolkit';
import {Contact} from '../types';
import {createContact, fetchContacts} from './contactThunks';
import {RootState} from '../app/store';

interface ContactState {
  list: Contact[];
}

const initialState: ContactState = {
  list: [],
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, (state) => {
      console.log('[fetchContacts.pending]   ' + state);
    });
    builder.addCase(fetchContacts.fulfilled, (state, {payload}) => {
      console.log('[fetchContacts.fulfilled]   ' + state);
      state.list = payload;
    });
    builder.addCase(fetchContacts.rejected, (state) => {
      console.log('[fetchContacts.rejected]   ' + state);
    });
    builder.addCase(createContact.pending, (state) => {
      console.log('[createContact.pending]   ' + state);
    });
    builder.addCase(createContact.fulfilled, (state) => {
      console.log('[createContact.fulfilled]   ' + state);

    });
    builder.addCase(createContact.rejected, (state) => {
      console.log('[createContact.rejected]   ' + state);
    });
  }
});


export const selectList = (state: RootState) => state.contact.list;

export const {} = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
