/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../../types/auth-types';

const initialState: AuthState = {
  loading: false,
  user: null,
  isError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: (state) => {
      localStorage.removeItem('token');
      localStorage.removeItem('isLogged');
      state.loading = false;
      state.isError = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isPending, (state) => {
        state.loading = true;
        state.isError = null;
      })
      .addMatcher(isFulfilled, (state, action: PayloadAction<any>) => {
        state.user = action.payload.user;
        if (state.user) {
          localStorage.setItem('token', state.user.token);
          localStorage.setItem('isLogged', 'true');
        }
        state.loading = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<any>) => {
        state.isError = action.payload;
        state.loading = false;
      });
  },
});

function isError(action: AnyAction) {
  return action.type.endsWith('rejected') && action.type.includes('auth');
}

function isPending(action: AnyAction) {
  return action.type.endsWith('pending') && action.type.includes('auth');
}

function isFulfilled(action: AnyAction) {
  return action.type.endsWith('fulfilled') && action.type.includes('auth');
}

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
