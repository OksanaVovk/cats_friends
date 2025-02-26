import { createSlice } from '@reduxjs/toolkit';
import authOperations from './operations';

const initialState = {
  user: { name: null, email: null, favorite: [], avatarUrl: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuth(state) {
      state.user = { name: null, email: null, favorite: [], avatarUrl: null };
      state.token = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(authOperations.register.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(authOperations.logIn.fulfilled, (state, action) => {
        state.user = action.payload.data.user;
        state.token = action.payload.data.token;
        state.isLoggedIn = true;
      })

      .addCase(authOperations.logOut.fulfilled, state => {
        state.user = { name: null, email: null, favorite: [], avatarUrl: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(authOperations.fetchCurrentUser.pending, state => {
        state.isFetchingCurrentUser = true;
      })
      .addCase(authOperations.fetchCurrentUser.fulfilled, (state, action) => {
        state.isFetchingCurrentUser = false;
        state.user = action.payload.data.user;
        state.token = action.payload.data.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.fetchCurrentUser.rejected, state => {
        state.isFetchingCurrentUser = false;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(authOperations.updateFavorite.fulfilled, (state, action) => {
        state.user = action.payload.data.user;
      })
      .addCase(authOperations.updateAvatar.fulfilled, (state, action) => {
        state.user.avatarUrl = action.payload.avatarUrl;
      });
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
