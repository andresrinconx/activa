import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserStore {
  user: any;
  isPAM: boolean;
  isEnvironment: boolean;
  isAdvertiser: boolean;
  setUser: (user: any) => void;
  token: string | null;
  setToken: (token: string) => void;
  currentPAM: string | null;
  setCurrentPAM: (pam: string) => void;
}

const useUserStore = create<UserStore>()(
  persist(
    set => ({
      user: null,
      isPAM: false,
      isEnvironment: false,
      isAdvertiser: false,
      setUser: (user: any) => {
        set({
          user,
          isPAM: user?.role === 'P.A.M',
          isEnvironment: user?.role === 'Entorno',
          isAdvertiser: user?.role === 'Anunciante',
          currentPAM: null,
        });
      },
      token: null,
      setToken: (token: string) => set({ token }),
      currentPAM: null,
      setCurrentPAM: (pam: string) => set({ currentPAM: pam }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useUserStore;
