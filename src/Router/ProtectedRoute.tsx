import React, { FC, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

interface IProtectedRouteProps {
  children: ReactElement;
}

const ProtectedRoute: FC<IProtectedRouteProps> = ({ children }) => {
  const { authStatus } = useAuthStore((state) => state);

  if (!authStatus.isLoggedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
};

export default ProtectedRoute;
