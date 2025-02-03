import axios from 'axios';

export const apiAxios = axios.create({
  withCredentials: true,
  headers: {
    'Content-type': 'application/json',
  },
  baseURL: 'http://localhost:5001/api/',
});

export const apiToken = {
  set(token) {
    apiAxios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    apiAxios.defaults.headers.common.Authorization = '';
  },
};
