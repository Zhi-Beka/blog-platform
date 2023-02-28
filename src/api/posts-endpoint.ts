import { NewPostRequest } from '../types/postTypes';
import axios from './axios';

const postEndpoints = {
  createPost: (data: any) => axios.post('/articles', data),
};

export default postEndpoints;
