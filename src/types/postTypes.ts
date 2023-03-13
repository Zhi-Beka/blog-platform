import api from '../api';

export type NewPostRequest = {
  article: INewPost;
};

interface INewPost {
  title: string;
  description: string;
  body: string;
  tagList: string[];
}

export interface IPost {
  slug: string;
  title: string;
  description: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: string[];
  favorited: boolean;
  favoritesCount: number;
  author: {
    username: string;
    image: string;
    following: boolean;
  };
}

export interface ErrorType {
  errorMessage: string;
  errors: {
    message: string;
    error?: {
      status: string | number;
    };
  };
}

export interface IPostState {
  loading: boolean;
  article: IPost | null;
  error: ErrorType | null;
}

export interface IPostResponse {
  article: IPost;
}

// types of endpoints
export type NewPost = typeof api.post.createPost;
export type PostRequestType = NewPost;
