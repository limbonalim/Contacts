import {createSlice} from '@reduxjs/toolkit';
import {Contact} from '../types';
import {createContact, deleteContact, editContact, fetchContacts} from './contactThunks';
import {RootState} from '../app/store';

interface ContactState {
  list: Contact[];
  showModal: boolean;
  currentContact: Contact | null;
  isLoading: boolean;
  isFormSubmit: boolean;
  isDeleting: boolean;
  isError: boolean;
  errorMessage: string | undefined;
}

const initialState: ContactState = {
  list: [],
  showModal: false,
  currentContact: null,
  isLoading: false,
  isFormSubmit: false,
  isDeleting: false,
  isError: false,
  errorMessage: undefined,
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
    },
    closeAlert: (state) => {
      state.isError = false;
      state.errorMessage = undefined;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchContacts.fulfilled, (state, {payload}) => {
      state.list = payload;
      state.isLoading = false;
    });
    builder.addCase(fetchContacts.rejected, (state, {error}) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = error.message;
    });
    builder.addCase(createContact.pending, (state) => {
      state.isFormSubmit = true;
    });
    builder.addCase(createContact.fulfilled, (state) => {
      state.isFormSubmit = false;
    });
    builder.addCase(createContact.rejected, (state, {error}) => {
      state.isFormSubmit = false;
      state.isError = true;
      state.errorMessage = error.message;
    });
    builder.addCase(editContact.pending, (state) => {
      state.isFormSubmit = true;
    });
    builder.addCase(editContact.fulfilled, (state) => {
      state.isFormSubmit = false;
    });
    builder.addCase(editContact.rejected, (state, {error}) => {
      state.isFormSubmit = false;
      state.isError = true;
      state.errorMessage = error.message;
    });
    builder.addCase(deleteContact.pending, (state) => {
      state.isDeleting = true;
    });
    builder.addCase(deleteContact.fulfilled, (state) => {
      state.isDeleting = false;
    });
    builder.addCase(deleteContact.rejected, (state, {error}) => {
      state.isDeleting = false;
      state.isError = true;
      state.errorMessage = error.message;
    });
  }
});


export const selectList = (state: RootState) => state.contact.list;
export const selectShowModal = (state: RootState) => state.contact.showModal;
export const selectCurrentContact = (state: RootState) => state.contact.currentContact;
export const selectIsLoading = (state: RootState) => state.contact.isLoading;
export const selectIsFormSubmit = (state: RootState) => state.contact.isFormSubmit;
export const selectIsDeleting = (state: RootState) => state.contact.isDeleting;
export const selectIsError = (state: RootState) => state.contact.isError;
export const selectErrorMessage = (state: RootState) => state.contact.errorMessage;

export const {
  openModal,
  closeModal,
  clearCurrent,
  closeAlert
} = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
