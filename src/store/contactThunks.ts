import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../Axios-api';
import {ApiData, Contact, FormContact} from '../types';


export const fetchContacts = createAsyncThunk<Contact[]>(
  'contact/fetchAll',
  async () => {
    const response = await axiosApi.get<ApiData | null>('/contacts.json');
    const data = response.data;
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
    await axiosApi.post('/contacts.json', contact);
  }
);