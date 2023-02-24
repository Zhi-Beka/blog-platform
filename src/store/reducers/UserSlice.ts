import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { createSlice } from '@reduxjs/toolkit';
import { IState } from '../types';
import { fetchUsers } from '../action-creators/fetchUsers';

const initialState: IState = {
  loading: true,
  users: [],
  error: false,
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.pending.type]: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      state.users = action.payload;
      state.error = '';
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export default UserSlice.reducer;
