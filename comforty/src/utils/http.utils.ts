import axios from 'axios';

// Create an instance of Axios with custom config
const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:9000', // Base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // You can modify the config (e.g., attach auth token)
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Do something with the request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Handle the response (e.g., transform the data if needed)
    return response;
  },
  (error) => {
    // Handle errors globally (e.g., redirect on 401)
    if (error.response.status === 401) {
      console.log('Unauthorized, logging out...');
      // Optionally, logout the user or redirect
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
