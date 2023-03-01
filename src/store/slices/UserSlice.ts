import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../thunks/fetchUsers';
import { IState } from '../../types/user-types';

const initialState: IState = {
  loading: false,
  users: [],
  articleCount: 0,
  error: false,
};

export const UserSlice = createSlice({
  name: 'users/articles',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.pending.type]: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.users = action.payload.articles;
      state.articleCount = action.payload.articlesCount;
      state.error = '';
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default UserSlice.reducer;
