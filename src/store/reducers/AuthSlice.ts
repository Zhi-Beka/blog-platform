import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';

import { logOutAuth, registerUser } from '../action-creators/authUsers';
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
    },
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
