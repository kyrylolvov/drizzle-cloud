import { IUser, IUserTokens } from '../types/auth';
import { instance } from './instance';

export const signIn = async (code: string) =>
  instance.post<IUserTokens>('/user/sign-up', {
    params: {
      code,
    },
  });

export const refresh = async ({ refresh_token }: { refresh_token: string }) =>
  instance.get<IUserTokens>('/user/refresh', {
    headers: {
      Authorization: `Bearer ${refresh_token}`,
    },
  });

export const getMe = async () => instance.get<IUser>('/user/me');
