import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isLoggedIn: boolean;
  hasActiveSubscription: boolean;
  phoneNumber: string | null;
  isAuthModalOpen: boolean;
  login: (phoneNumber: string) => void;
  logout: () => void;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  setSubscriptionStatus: (status: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      hasActiveSubscription: true, // Defaulting to true as requested earlier
      phoneNumber: null,
      isAuthModalOpen: false,

      login: (phoneNumber: string) => {
        // Local storage is handled automatically by persist middleware
        set({ 
          isLoggedIn: true, 
          phoneNumber, 
          isAuthModalOpen: false 
        });
      },

      logout: () => {
        // Clear auth data
        set({ 
          isLoggedIn: false, 
          phoneNumber: null,
          isAuthModalOpen: false
        });
        // Note: hasActiveSubscription is kept as is or reset depending on business logic
        // For now we keep it as true to follow previous instruction
      },

      openAuthModal: () => set({ isAuthModalOpen: true }),
      closeAuthModal: () => set({ isAuthModalOpen: false }),
      setSubscriptionStatus: (status: boolean) => set({ hasActiveSubscription: status }),
    }),
    {
      name: 'siksha-kendra-auth',
      partialize: (state) => ({ 
        isLoggedIn: state.isLoggedIn, 
        phoneNumber: state.phoneNumber,
        hasActiveSubscription: state.hasActiveSubscription 
      }),
    }
  )
);
