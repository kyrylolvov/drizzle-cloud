export interface IAuthStore {
  tokens: IUserTokens;
  user: IUser | null;
  authStatus: IAuthStatus;

  signIn: (code: string) => Promise<void>;
  getMe: () => Promise<void>;
}

export interface IUserTokens {
  access_token: string;
  refresh_token: string;
}

export interface IUser {
  name: string;
  api_key: string;
}

export interface IAuthStatus {
  isLoading: boolean;
  isLoggedIn: boolean;
}
