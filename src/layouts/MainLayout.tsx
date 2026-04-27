import React from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { AuthModal } from '../components/common/AuthModal';
import { useAuthStore } from '../store/useAuthStore';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);
  const location = useLocation();

  // Define routes that should NOT show the main Header/Footer (e.g., dashboard, learning room)
  const isDashboardRoute = location.pathname.startsWith('/dashboard') || 
                          location.pathname.startsWith('/learning');

  return (
    <div className="min-h-screen flex flex-col">
      {!isDashboardRoute && <Header />}
      <main className="flex-grow">
        {children}
      </main>
      {!isDashboardRoute && <Footer />}
      <AuthModal />
    </div>
  );
};
