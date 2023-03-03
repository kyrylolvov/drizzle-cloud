import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';

const App = () => (
  <Routes>
    <Route path="/sign-in" element={<AuthPage />} />
    <Route path="/" element={<DashboardPage />} />
  </Routes>
);

export default App;
