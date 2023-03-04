import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AuthPage from '../pages/AuthPage';
import DashboardPage from '../pages/DashboardPage';
import BaseRoute from './BaseRoute';
import ProtectedRoute from './ProtectedRoute';

const Router = () => (
  <Routes>
    <Route
      path="/sign-in"
      element={
        <BaseRoute>
          <AuthPage />
        </BaseRoute>
      }
    />
    <Route
      path="/"
      element={
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      }
    />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default Router;
