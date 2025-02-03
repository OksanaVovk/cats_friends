import { createSlice } from '@reduxjs/toolkit';
import { getCats } from './operations';

const initialState = {
  data: [],
  isLoading: false,
  error: false,
};

const catsSlice = createSlice({
  name: 'cat',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCats.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(getCats.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(getCats.rejected, state => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const catsReducer = catsSlice.reducer;
