import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../components/Button';
import { getGitHubUrl } from '../utils/auth';

import { ReactComponent as GithubIcon } from '../assets/images/icons/github-icon.svg';

import * as css from './_css';

const AuthPage: FC = () => {
  const { pathname } = useLocation();

  return (
    <div css={css.centeredPageContainer}>
      <Link to={getGitHubUrl(pathname)}>
        <Button iconBefore={<GithubIcon />} secondary type="button" width="200px" height="48px">
          Sign in with Github
        </Button>
      </Link>
    </div>
  );
};

export default AuthPage;
