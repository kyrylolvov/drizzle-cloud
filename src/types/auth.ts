export interface IAuthStore {
  tokens: IUserTokens;

  signIn: (code: string) => Promise<void>;
}

export interface IUserTokens {
  access_token: string;
  refresh_token: string;
}
