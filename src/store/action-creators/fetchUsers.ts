import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://blog.kata.academy/api/';

export const fetchUsers = createAsyncThunk('users/allArticles', async (_, thunkAPI) => {
  try {
    const res = await axios.get(`${baseURL}articles`);
    return res.data.articles;
  } catch (e) {
    return thunkAPI.rejectWithValue('Something went wrong...');
  }
});
