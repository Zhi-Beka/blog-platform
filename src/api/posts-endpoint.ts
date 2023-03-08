import axios from './axios';

const postEndpoints = {
  createPost: (data: any) => axios.post('/articles', data),
  updatePost: (data: any) => axios.put(`articles/${data.slug}`, data),
  deletePost: (slug: string) => axios.delete(`articles/${slug}`),
  likePost: (slug: string) => axios.post(`articles/${slug}/favorite`),
  deleteLike: (slug: string) => axios.delete(`articles/${slug}/favorite`),
};

export default postEndpoints;
