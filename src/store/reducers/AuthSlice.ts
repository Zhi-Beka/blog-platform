import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';

import { loginUser, logOutAuth, registerUser } from '../action-creators/authUsers';
import { IStateRegister, UserDataType } from '../types';

const initialState: IStateRegister = {
  loading: false,
  userInfo: null,
  error: false,
  message: '',
  success: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.error = false;
      state.message = '';
      state.success = false;
    },
    checkToken: (state) => {
      state.success = true;
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.loading = true;
    },
    [registerUser.fulfilled]: (state, action: PayloadAction<UserDataType>) => {
      state.loading = false;
      state.success = true;
      state.userInfo = action.payload;
    },
    [registerUser.rejected]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = true;
      state.message = action.payload;
    },
    [logOutAuth.fulfilled]: (state, action: PayloadAction<any>) => {
      state.userInfo = null;
      state.success = false;
    },
    [loginUser.pending]: (state) => {
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, action: PayloadAction<UserDataType>) => {
      state.loading = false;
      state.success = true;
      state.userInfo = action.payload;
    },
    [loginUser.rejected]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = true;
      state.message = action.payload;
    },
  },
});

export const { reset, checkToken } = authSlice.actions;
export default authSlice.reducer;
