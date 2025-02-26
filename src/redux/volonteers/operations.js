import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiAxios } from '../../servises/api';

export const getVolonteers = createAsyncThunk(
  'volonteer',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await apiAxios.get('volonteers', credentials);
      return data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
