import { createSlice } from '@reduxjs/toolkit';
import { getVolonteers } from './operations';

const initialState = {
  data: [],
  isLoading: false,
  error: false,
};

const volonteersSlice = createSlice({
  name: 'volonteer',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getVolonteers.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(getVolonteers.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(getVolonteers.rejected, state => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const volonteersReducer = volonteersSlice.reducer;
