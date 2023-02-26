import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { INewUser } from '../types';

export const registerUser: any = createAsyncThunk('auth/register', async (userInfo: INewUser, { rejectWithValue }) => {
  const url = 'https://blog.kata.academy/api/users';

  try {
    const response = await axios.post(url, userInfo);
    const { username, email, token } = response.data.user;
    if (response.data) {
      localStorage.setItem('token', JSON.stringify(token));
    }

    return { username, email, token };
  } catch (error: any) {
    const message = (error.response && error.response.data.message) || error.message || error.toString();
    return rejectWithValue(message);
  }
});

export const logOutAuth: any = createAsyncThunk('auth/LogOut', async () => {
  localStorage.removeItem('token');
});
