import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiAxios, apiToken } from 'servises/api';
import { authActions } from './slice';
import { toast } from 'react-hot-toast';

const token = apiToken;
const API = apiAxios;

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await API.post('auth/register', credentials);
      toast.success(`User ${data.data.user.name} successfully registered!`, {
        position: 'top-right',
      });

      return data;
    } catch (error) {
      toast.error(`Register failed: ${error.message}`, {
        position: 'top-right',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await API.get('auth/logout');
    token.unset();
  } catch (error) {
    token.unset();
    thunkAPI.dispatch(authActions.resetAuth());
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await API.post('auth/login', credentials);
      token.set(data.data.token);
      return data;
    } catch (error) {
      toast.error(
        `Login failed: ${error.message}. ${error.response.data.message}`,
        {
          position: 'top-right',
        }
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.authCats.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await API.get('/auth/refresh');
      return data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      token.unset();
      thunkAPI.dispatch(authActions.resetAuth());
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateFavorite = createAsyncThunk(
  'users/favorite',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await API.patch('users/favorite', credentials);
      return data;
    } catch (error) {
      toast.error('Failed to add the image to favorites', {
        position: 'top-right',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const updateAvatar = createAsyncThunk(
  'users/avatars',
  async (file, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('avatar', file);

      const { data } = await API.patch('users/avatars', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
    } catch (error) {
      toast.error(
        `Failed to update avatar. ${
          error.response?.data?.message || 'Unknown error'
        }`,
        {
          position: 'top-right',
        }
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
  updateFavorite,
  updateAvatar,
};

export default authOperations;
