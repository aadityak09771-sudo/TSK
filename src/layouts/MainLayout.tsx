import React from 'react';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { AuthModal } from '../components/common/AuthModal';
import { useAuthStore } from '../store/useAuthStore';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);

  return (
    <div className="min-h-screen flex flex-col">
      {!isLoggedIn && <Header />}
      <main className="flex-grow">
        {children}
      </main>
      {!isLoggedIn && <Footer />}
      <AuthModal />
    </div>
  );
};
