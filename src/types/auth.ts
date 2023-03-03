export interface IAuthStore {
  tokens: {
    access_token: string;
    refresh_token: string;
  };

  signIn: (code: string) => Promise<void>;
}

export interface ISignInResponse {
  access_token: string;
  refresh_token: string;
}
