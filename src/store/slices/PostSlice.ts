/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnyAction, createSlice } from '@reduxjs/toolkit';
import { IPostState } from '../../types/postTypes';

const initialState: IPostState = {
  loading: false,
  article: null,
  error: null,
};

export const PostSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(isPending, (state) => {
        state.loading = true;
      })
      .addMatcher(isFulfilled, (state, action) => {
        state.article = action.payload.article;
        state.loading = false;
      })
      .addMatcher(isError, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

function isError(action: AnyAction) {
  return action.type.endsWith('rejected') && action.type.includes('posts');
}

function isPending(action: AnyAction) {
  return action.type.endsWith('pending') && action.type.includes('posts');
}

function isFulfilled(action: AnyAction) {
  return action.type.endsWith('fulfilled') && action.type.includes('posts');
}

export default PostSlice.reducer;
