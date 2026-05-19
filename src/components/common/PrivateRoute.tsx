import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';

interface PrivateRouteProps {
  children: React.ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);
  const openAuthModal = useAuthStore(state => state.openAuthModal);
  const location = useLocation();

  useEffect(() => {
    if (!isLoggedIn) {
      openAuthModal();
    }
  }, [isLoggedIn, openAuthModal]);

  if (!isLoggedIn) {
    // Redirect to home but save the attempted location
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
