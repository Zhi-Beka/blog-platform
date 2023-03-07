import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axios';

const baseURL = 'https://blog.kata.academy/api/';

export const fetchUsers = createAsyncThunk('users/allArticles', async (page: number, thunkAPI) => {
  try {
    const res = await axios.get(`${baseURL}articles?&limit=5&offset=${(page - 1) * 5}`);
    return res.data;
  } catch (e) {
    return thunkAPI.rejectWithValue('Something went wrong...');
  }
});
