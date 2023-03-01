import { createAsyncThunk } from '@reduxjs/toolkit';
import { IPostResponse, PostRequestType } from '../../types/postTypes';
import api from '../../api';

function postThunkCreator(name: string, request: PostRequestType, error: string): any {
  return createAsyncThunk<IPostResponse & { rejectValue: any }>(name, async (data, thunkAPI): Promise<any> => {
    try {
      const res = await request(data);
      console.log(res, 'res');
      return res.data;
    } catch (err: any) {
      const message = {
        errorMessage: error,
        errors: err.response.data.errors,
      };
      return thunkAPI.rejectWithValue(message);
    }
  });
}

export const postNewArticle = postThunkCreator('posts/new-article', api.post.createPost, 'Something went wrong');

export const getArticleBySlug = postThunkCreator(
  'posts/article',
  api.post.getPost,
  'There is no article that you are looking for',
);
