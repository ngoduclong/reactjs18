import { TAuthToken } from '@/interfaces/auth';
import { EAuthToken } from '@/variables/common';

export const setItem = (key: string, value: string) => {
  return localStorage.setItem(key, value);
};

export const getItem = (key: string) => {
  return localStorage.getItem(key);
};

export const handleStorageToken = (token: TAuthToken) => {
  setItem(EAuthToken.ACCESS_TOKEN, token?.accessToken);
  setItem(EAuthToken.REFRESH_TOKEN, token?.refreshToken);
};
