import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'red',
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    toggleTheme: state => {
      state.theme = state.theme === 'red' ? 'blue' : 'red';
    },
  },
});

export const { toggleTheme } = layoutSlice.actions;

export default layoutSlice.reducer;
