import axios from 'axios';

export const url = 'https://cats-friends-backend.onrender.com/';
// export const url = 'http://localhost:5001/';

export const apiAxios = axios.create({
  withCredentials: true,
  headers: {
    'Content-type': 'application/json',
  },

  baseURL: 'https://cats-friends-backend.onrender.com/api/',
  // baseURL: 'http://localhost:5001/api/',
});

export const apiToken = {
  set(token) {
    apiAxios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    apiAxios.defaults.headers.common.Authorization = '';
  },
};
