import { IPostResponse, NewPostRequest } from '../types/postTypes';
import axios from './axios';

const postEndpoints = {
  createPost: (data: any) => axios.post('/articles', data),
  getPost: (slug: string) => axios.get(`articles/${slug}`),
  updatePost: (data: any) => axios.put(`articles/${data.slug}`, data),
  deletePost: (slug: string) => axios.delete(`articles/${slug}`),
};

export default postEndpoints;
