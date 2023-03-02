import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthPage from './pages/Auth';

const App = () => (
  <Routes>
    <Route path="*" element={<AuthPage />} />
  </Routes>
);

export default App;
