import { createSlice } from '@reduxjs/toolkit';
import {
  getCurrentUser,
  loginUser,
  logoutUser,
  signUpUser,
} from 'redux/thunks/authThunks';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    name: '',
    isLoggedIn: false,
    isFetchingCurrent: false,
  },
  extraReducers: {
    [signUpUser.fulfilled]: (state, { payload }) => {
      localStorage.setItem('token', payload.token);
      state.name = payload.user.name;
      state.isLoggedIn = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      localStorage.setItem('token', payload.token);
      state.name = payload.user.name;
      state.isLoggedIn = true;
    },
    [logoutUser.fulfilled]: state => {
      localStorage.removeItem('token');
      state.name = '';
      state.isLoggedIn = false;
    },
    [getCurrentUser.fulfilled]: (state, { payload }) => {
      state.name = payload.name;
      state.email = payload.email;
      state.isLoggedIn = true;
      state.isFetchingCurrent = false;
    },
    [getCurrentUser.pending]: state => {
      state.isFetchingCurrent = true;
    },
    [getCurrentUser.rejected]: state => {
      state.isFetchingCurrent = false;
    },
  },
});

export default authSlice.reducer;
