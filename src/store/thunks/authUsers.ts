/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';
import { GeneralRequest, RequestType, UserResponse } from '../../types/auth-types';

function generalThunkCreator(name: string, request: RequestType, error: string): any {
  return createAsyncThunk<UserResponse & GeneralRequest & { rejectValue: any }>(
    name,
    async (data, thunkAPI): Promise<any> => {
      try {
        const res = await request(data);

        return res.data;
      } catch (err: any) {
        const message = {
          errorMessage: error,
          errors: err.response.data.errors,
        };
        return thunkAPI.rejectWithValue(message);
      }
    },
  );
}

export const signUpUser = generalThunkCreator(
  'auth/signUp',
  api.user.signup,
  'There was an error during user registration',
);

export const loginUser = generalThunkCreator(
  'auth/login',
  api.user.login,
  'An error occurred while logging into the user page',
);

export const getCurrentUser = generalThunkCreator(
  'auth/currentUser',
  api.user.getCurrentUser,
  'Sorry, you did not loggined',
);

export const updateProfile = generalThunkCreator(
  'auth/updateProfile',
  api.user.updateProfile,
  'An error occurred during profile update',
);
