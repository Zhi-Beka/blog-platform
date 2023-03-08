import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://blog.kata.academy/api',
});

instance.interceptors.request.use(
  (config) => {
    //for debugging
    console.info(`[request] [${JSON.stringify(config)}]`);

    const token = localStorage.getItem('token');

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export default instance;
