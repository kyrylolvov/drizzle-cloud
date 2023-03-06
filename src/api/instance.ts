/* eslint-disable @typescript-eslint/naming-convention */
import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { toast } from 'react-hot-toast';
import { useAuthStore } from '../store/authStore';
import { refresh } from './auth';

const handleAuthorization = (config: InternalAxiosRequestConfig) => {
  const { access_token } = useAuthStore.getState().tokens;

  const modifiedConfig = config;

  modifiedConfig.headers.Authorization = `Bearer ${access_token}`;

  return config;
};

const handleResponse = (response: AxiosResponse) => response.data;

const handleErrors = async (err: AxiosError<{ message: string }>) => {
  if (err.response?.status === 401) {
    const originalRequest = err.config!;
    const { refresh_token } = useAuthStore.getState().tokens;

    const { data } = await refresh({ refresh_token });

    originalRequest.headers.Authorization = `Bearer ${data.access_token}`;
    useAuthStore.setState({ tokens: { ...data } });

    return axios(originalRequest);
  }

  toast.error(err.response?.data?.message ?? 'Oops..! Something went wrong.');
  return Promise.reject(err);
};

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

instance.interceptors.request.use(handleAuthorization);

instance.interceptors.response.use(handleResponse, handleErrors);
