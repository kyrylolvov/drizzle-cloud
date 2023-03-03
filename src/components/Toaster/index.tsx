import React, { FC } from 'react';
import { Toaster } from 'react-hot-toast';

export const Notification: FC = () => (
  <Toaster
    position="top-right"
    toastOptions={{
      style: {
        fontFamily: 'Inter',
        fontSize: '14px',
        fontWeight: 500,
        width: '270px',
      },
    }}
  />
);
