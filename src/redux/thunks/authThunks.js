import { createAsyncThunk } from '@reduxjs/toolkit';
import { currentGet, loginPost, logoutPost, signUpPost } from 'utils/authApi';

export const getCurrentUser = createAsyncThunk('auth/getCurrent', currentGet);

export const logoutUser = createAsyncThunk('auth/logout', logoutPost);

export const loginUser = createAsyncThunk('auth/login', async contact =>
  loginPost(contact),
);

export const signUpUser = createAsyncThunk('auth/signUp', async contact =>
  signUpPost(contact),
);
