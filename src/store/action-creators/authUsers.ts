import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { INewUser, UserDataType } from '../types';

export const registerUser: any = createAsyncThunk('auth/register', async (userInfo: INewUser, { rejectWithValue }) => {
  const url = 'https://blog.kata.academy/api/users';

  try {
    const response = await axios.post(url, userInfo);
    const { token } = response.data.user;
    if (response.data) {
      localStorage.setItem('token', JSON.stringify(token));
    }

    return response.data.user;
  } catch (error: any) {
    const message = (error.response && error.response.data.message) || error.message || error.toString();
    return rejectWithValue(message);
  }
});

export const logOutAuth: any = createAsyncThunk('auth/LogOut', async () => {
  localStorage.removeItem('token');
});
type LogIn = {
  user: {
    email: string;
    password: string;
  };
};
export const loginUser: any = createAsyncThunk('auth/LogIn', async (userInfo: LogIn, { rejectWithValue }) => {
  const url = 'https://blog.kata.academy/api/users/login';

  try {
    const response = await axios.post(url, userInfo);
    const { username, email, token } = response.data.user;

    if (response.data) {
      localStorage.setItem('token', JSON.stringify(token));
    }

    return { username, email };
  } catch (error: any) {
    const message = (error.response && error.response.data.message) || error.message || error.toString();
    return rejectWithValue(message);
  }
});
