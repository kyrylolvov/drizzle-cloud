import { IUserTokens } from '../types/auth';
import { instance } from './instance';

export const signIn = async (code: string) =>
  instance.post<IUserTokens>('/user/sign-up', {
    params: {
      code,
    },
  });
