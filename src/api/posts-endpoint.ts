import { IPostResponse, NewPostRequest } from '../types/postTypes';
import axios from './axios';

const postEndpoints = {
  createPost: (data: any) => axios.post('/articles', data),
  getPost: (slug: string) => axios.get(`articles/${slug}`),
};

export default postEndpoints;
