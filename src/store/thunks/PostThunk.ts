import { createAsyncThunk } from '@reduxjs/toolkit';
import { IPostResponse, PostRequestType } from '../../types/postTypes';
import api from '../../api';

function postThunkCreator(name: string, request: PostRequestType, error: string): any {
  return createAsyncThunk<IPostResponse & { rejectValue: any }>(name, async (data, thunkAPI): Promise<any> => {
    try {
      const res = await request(data);
      console.log(res);
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

export const postNewArticle = postThunkCreator(
  'posts/new-article',
  api.post.createPost,
  'An error occurer during posting new article',
);

export const getArticleBySlug = postThunkCreator(
  'posts/article',
  api.post.getPost,
  'There is no article that you are looking for',
);

export const updateArticleBySlug = postThunkCreator(
  'posts/update-article',
  api.post.updatePost,
  'An error occur, while update article',
);

export const deleteArticleBySlug = createAsyncThunk<string, string, { rejectValue: string }>(
  'posts/delete',
  async (slug, { rejectWithValue }): Promise<any> => {
    try {
      const response = await api.post.deletePost(slug);
      console.log(response);
      return response.data;
    } catch (e) {
      return rejectWithValue('Произошла ошибка при удалeнии статьи');
    }
  },
);
