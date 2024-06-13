import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

import { EAuthToken } from '@/variables/common';
import { RoutePaths } from '@/routes';

const client = axios.create({ baseURL: import.meta.env.VITE_API_URL });

const requestHandler = (config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem(EAuthToken.ACCESS_TOKEN);
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  config.params = {
    ...config.params,
    version: Date.now(),
  };

  return config;
};

const responseErrorHandler = async (err: AxiosError) => {
  if (err?.response?.status === 401) {
    localStorage.clear();
    window.location.pathname = RoutePaths.LOGIN;
    return;
  }

  if (err?.response?.status === 403) {
    window.location.pathname = RoutePaths.HOME;
    return;
  }

  return Promise.reject(err.response?.data);
};

client.interceptors.request.use(requestHandler, (error) => Promise.reject(error));
client.interceptors.response.use((res) => res, responseErrorHandler);

export default client;
