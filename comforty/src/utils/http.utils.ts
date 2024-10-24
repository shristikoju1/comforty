import axios from 'axios';

// Create an instance of Axios with custom config
const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:9000', 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      console.log('Unauthorized, logging out...');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
