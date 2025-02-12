import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { creatNotifyError, createNotifySuccess } from 'helpers/createNotify';
import { apiAxios, apiToken } from 'servises/api';
import { authActions } from './slice';

const token = apiToken;
const API = apiAxios;

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await API.post('auth/register', credentials);
      createNotifySuccess(
        `User ${data.data.user.name} successfully registered`
      );
      return data;
    } catch (error) {
      creatNotifyError(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await API.get('auth/logout');
  } catch (error) {
    creatNotifyError(error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
  token.unset();
  thunkAPI.dispatch(authActions.resetAuth());
});

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await API.post('auth/login', credentials);
      console.log(data);
      token.set(data.data.token);
      return data;
    } catch (error) {
      creatNotifyError(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default authOperations;
