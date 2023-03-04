import React, { FC, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

interface IBaseRouteProps {
  children: ReactElement;
}

const BaseRoute: FC<IBaseRouteProps> = ({ children }) => {
  const { authStatus } = useAuthStore((state) => state);

  if (authStatus.isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default BaseRoute;
