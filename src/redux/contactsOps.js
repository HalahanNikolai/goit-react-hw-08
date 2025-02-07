import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { goitApi } from './authOperations';

// axios.defaults.baseURL = 'https://658ede332871a9866e79f6fe.mockapi.io';
axios.defaults.baseURL = 'https://connections-api.goit.global';

export const setAuthHeader = (token) => {
  goitApi.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      // const response = await axios.get('/contacts');
      const state = thunkAPI.getState();
      const token = state.auth.token;

      if (!token) throw new Error('No token found');

      const response = await axios.get('/contacts', {
        headers: { Authorization: `Bearer ${token}` },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      // const response = await axios.post('/contacts', contact);
      const state = thunkAPI.getState();
      const token = state.auth.token;

      console.log('state:', state)
      console.log('token:', token)
      if (token) throw new Error('No token found');

      const response = await axios.post('/contacts', contact, {
        headers: { Authorization: `Bearer ${token}` },
      });


      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
