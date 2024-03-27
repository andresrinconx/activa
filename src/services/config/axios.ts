import axios from 'axios';
// import { API_URL } from '@env';
import { useUserStore } from '../../store/index';

const baseURL = 'http://18.118.100.62/api';

const axiosInstance = axios.create({ baseURL });

axiosInstance.interceptors.request.use(async config => {
  const state = useUserStore.getState();
  if (state && state.token) {
    config.headers.Authorization = `Basic ${state.token}`;
  }
  return config;
});

export default axiosInstance;
