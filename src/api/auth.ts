import { ISignInResponse } from '../types/auth';
import { instance } from './instance';

export const postSignIn = async (code: string) =>
  instance.post<ISignInResponse>('/user/sign-up', {
    params: {
      code,
    },
  });
