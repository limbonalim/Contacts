import {createSlice} from '@reduxjs/toolkit';

interface ContactState {
  list: [];
}

const initialState: ContactState = {
  list: [],
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {}
});

export const {} = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
