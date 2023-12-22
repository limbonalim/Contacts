import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../Axios-api';
import {ApiData, Contact, EditData, FormContact} from '../types';


export const fetchContacts = createAsyncThunk<Contact[]>(
  'contact/fetchAll',
  async () => {
    const response = await axiosApi.get<ApiData | null>('/contacts.json');
    const data = response.data;
    if (response.status !== 200) {
      throw new Error('Try late');
    }
    if (data) {
      const keys = Object.keys(data);
      return keys.map((id): Contact => {
        return {
          ...data[id],
          id
        };
      });
    } else {
      return [];
    }
  }
);

export const createContact = createAsyncThunk<void, FormContact>(
  'contact/create',
  async (contact) => {
    const response = await axiosApi.post('/contacts.json', contact);
    if (response.status !== 200) {
      throw new Error('Try add new contact late');
    }
  }
);

export const editContact = createAsyncThunk<void, EditData>(
  'contact/edit',
  async ({contact, id}) => {
    console.log(contact + id);
    const response = await axiosApi.put(`/contacts/${id}.json`, contact);
    if (response.status !== 200) {
      throw new Error('Try edit late');
    }
  }
);

export const deleteContact = createAsyncThunk<void, string>(
  'contact/delete',
  async (id) => {
    const response = await axiosApi.delete(`/contacts/${id}.json`);
    if (response.status !== 200) {
      throw new Error('Try delete late');
    }
  }
);