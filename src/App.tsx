import React, { useEffect } from 'react';
import Loader from './components/Loader';
import { Notification } from './components/Toaster';
import Router from './Router/Router';
import { useAuthStore } from './store/authStore';

const App = () => {
  const { getMe } = useAuthStore((state) => state);

  useEffect(() => {
    getMe();
  }, []);

  return (
    <Loader>
      <Router />
      <Notification />
    </Loader>
  );
};

export default App;
