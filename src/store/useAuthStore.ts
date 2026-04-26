import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isLoggedIn: boolean;
  phoneNumber: string | null;
  isAuthModalOpen: boolean;
  login: (phoneNumber?: string) => void;
  logout: () => void;
  openAuthModal: () => void;
  closeAuthModal: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      phoneNumber: null,
      isAuthModalOpen: false,
      login: (phoneNumber = '') => set({ isLoggedIn: true, phoneNumber, isAuthModalOpen: false }),
      logout: () => set({ isLoggedIn: false, phoneNumber: null }),
      openAuthModal: () => set({ isAuthModalOpen: true }),
      closeAuthModal: () => set({ isAuthModalOpen: false }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ isLoggedIn: state.isLoggedIn, phoneNumber: state.phoneNumber }), // Don't persist modal state
    }
  )
);
