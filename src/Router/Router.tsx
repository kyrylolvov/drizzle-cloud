import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
  </Routes>
);

export default Router;
