import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiAxios } from '../../servises/api';

export const getCats = createAsyncThunk(
  'cat',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await apiAxios.get('cats', credentials);
      return data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
