import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';

interface PublicRouteProps {
  children: React.ReactNode;
}

export const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { isLoggedIn, hasActiveSubscription } = useAuthStore();

  if (isLoggedIn) {
    // If logged in, redirect to dashboard or library
    const targetPath = hasActiveSubscription ? '/dashboard' : '/library';
    return <Navigate to={targetPath} replace />;
  }

  return <>{children}</>;
};
