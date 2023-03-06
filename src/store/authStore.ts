import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getMe, signIn } from '../api/auth';
import { IAuthStore } from '../types/auth';

export const useAuthStore = create<IAuthStore>()(
  persist(
    (set, get) => ({
      tokens: { access_token: '', refresh_token: '' },
      user: null,
      authStatus: { isLoading: true, isLoggedIn: false },

      signIn: async (code) => {
        const { data } = await signIn(code);

        set({ tokens: { ...data }, authStatus: { isLoading: false, isLoggedIn: true } });
      },
      getMe: async () => {
        if (!get().tokens.access_token) {
          set({ authStatus: { isLoading: false, isLoggedIn: false } });
          return;
        }

        const { data } = await getMe();

        set({ user: data, authStatus: { isLoading: false, isLoggedIn: true } });
      },
    }),
    {
      name: 'tokens',
      partialize: (state) => ({ tokens: state.tokens }),
    }
  )
);
