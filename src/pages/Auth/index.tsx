import React, { FC } from 'react';
import * as mui from '@mui/material';
import { useLocation } from 'react-router-dom';
import { getGitHubUrl } from '../../utils/auth';
import { ReactComponent as GithubIcon } from '../../assets/images/icons/github-icon.svg';

import * as css from './css';

const AuthPage: FC = () => {
  const { pathname } = useLocation();

  return (
    <mui.Box css={css.container}>
      <mui.Button startIcon={<GithubIcon />} css={css.button} href={getGitHubUrl(pathname)}>
        Sign in with Github
      </mui.Button>
    </mui.Box>
  );
};

export default AuthPage;
