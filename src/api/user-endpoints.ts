import { LogInRequest, NewUserRequest } from '../types/auth-types';
import axios from './axios';

const endpoints = {
  signup: (data: NewUserRequest) => axios.post('/users', data),
  login: (data: LogInRequest) => axios.post('/users/login', data),
  getCurrentUser: () => axios.get('/user'),
  updateProfile: (data: any) => axios.put('/user', data),
};

export default endpoints;
