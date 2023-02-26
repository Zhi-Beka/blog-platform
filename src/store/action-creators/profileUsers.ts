import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const editProfile = createAsyncThunk('profile/edit', async (data: any, thunkAPI) => {
  const url = `https://blog.kata.academy/api/profiles/${data.username}/follow`;
  try {
    const res = await axios.post(url, data);
    console.log(res);
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});
