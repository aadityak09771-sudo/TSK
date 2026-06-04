import React from 'react';
import { Header } from '../components/common/Header/Header';
import Footer from '../components/common/ExpertThoughts/Footer';

import { AuthModal } from '../components/common/AuthModal/AuthModal';
import { useAuthStore } from '../store/useAuthStore';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Global Mobile Fixes */}
      <style>{`
        html, body {
          overflow-x: hidden;
          width: 100%;
        }
      `}</style>
      {!isLoggedIn && <Header />}
      <main className="flex-grow">
        {children}
      </main>
      {!isLoggedIn && <Footer />}
      <AuthModal />
    </div>
  );
};
