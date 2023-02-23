import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { createSlice } from '@reduxjs/toolkit';
import { IState } from '../types';

const initialState: IState = {
  loading: true,
  users: [],
  error: false,
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default UserSlice.reducer;
