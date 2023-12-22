import {createSlice} from '@reduxjs/toolkit';
import {Contact} from '../types';
import {createContact, deleteContact, editContact, fetchContacts} from './contactThunks';
import {RootState} from '../app/store';

interface ContactState {
  list: Contact[];
  showModal: boolean;
  currentContact: Contact | null;
}

const initialState: ContactState = {
  list: [],
  showModal: false,
  currentContact: null,
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    openModal: (state, {payload}) => {
      state.showModal = true;
      state.currentContact = payload;
    },
    closeModal: (state) => {
      state.showModal = false;
    },
    clearCurrent: (state) => {
      state.currentContact = null;
    }
  },
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
    builder.addCase(editContact.pending, (state) => {
      console.log('[editContact.pending]   ' + state);
    });
    builder.addCase(editContact.fulfilled, (state) => {
      console.log('[editContact.fulfilled]   ' + state);

    });
    builder.addCase(editContact.rejected, (state) => {
      console.log('[editContact.rejected]   ' + state);
    });
    builder.addCase(deleteContact.pending, (state) => {
      console.log('[deleteContact.pending]   ' + state);
    });
    builder.addCase(deleteContact.fulfilled, (state) => {
      console.log('[deleteContact.fulfilled]   ' + state);

    });
    builder.addCase(deleteContact.rejected, (state) => {
      console.log('[deleteContact.rejected]   ' + state);
    });
  }
});


export const selectList = (state: RootState) => state.contact.list;
export const selectShowModal = (state: RootState) => state.contact.showModal;
export const selectCurrentContact = (state: RootState) => state.contact.currentContact;

export const {openModal, closeModal, clearCurrent} = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
