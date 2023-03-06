import React, { FC, ReactNode } from 'react';
import * as css from './css';
import { useAuthStore } from '../../store/authStore';
import LoaderIcon from '../../assets/images/icons/loader-icon.svg';

interface LoaderProps {
  children: ReactNode;
}

const Loader: FC<LoaderProps> = ({ children }) => {
  const { authStatus } = useAuthStore((state) => state);

  if (authStatus.isLoading) {
    return (
      <div css={css.container}>
        <img src={LoaderIcon} alt="Loader" />
      </div>
    );
  }

  return <div css={css.childrenContainer}>{children}</div>;
};

export default Loader;
