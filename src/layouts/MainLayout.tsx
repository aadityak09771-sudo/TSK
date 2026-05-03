import React from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { AuthModal } from '../components/common/AuthModal';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();

  // Define routes that should NOT show the main Header/Footer (e.g., dashboard, learning room)
  const isDashboardRoute = location.pathname.startsWith('/dashboard') || 
                          location.pathname.startsWith('/learning') ||
                          location.pathname.startsWith('/my-purchases') ||
                          location.pathname.startsWith('/library');

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
