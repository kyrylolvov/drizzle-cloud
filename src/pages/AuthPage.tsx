import React, { FC, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Button from '../components/Button';

import { ReactComponent as GithubIcon } from '../assets/images/icons/github-icon.svg';

import * as css from './_css';
import { useAuthStore } from '../store/authStore';
import { getGitHubUrl } from '../utils/auth';

const AuthPage: FC = () => {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();

  const { signIn } = useAuthStore((state) => state);

  useEffect(() => {
    const code = searchParams.get('code');

    if (code) {
      signIn(code);
    }
  }, [searchParams]);

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
