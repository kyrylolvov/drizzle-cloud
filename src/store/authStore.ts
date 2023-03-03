import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { signIn } from '../api/auth';
import { IAuthStore } from '../types/auth';

export const useAuthStore = create<IAuthStore>()(
  persist(
    (set, get) => ({
      tokens: { access_token: '', refresh_token: '' },

      signIn: async (code) => {
        const { data } = await signIn(code);

        set({ tokens: { ...data } });
      },
    }),
    {
      name: 'tokens',
      partialize: (state) => ({ tokens: state.tokens }),
    }
  )
);
