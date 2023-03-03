import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/Button';

import { ReactComponent as GithubIcon } from '../assets/images/icons/github-icon.svg';

import * as css from './_css';
import { useAuthStore } from '../store/authStore';

const AuthPage: FC = () => {
  const { pathname } = useLocation();

  const { signIn } = useAuthStore((state) => state);

  return (
    <div css={css.centeredPageContainer}>
      {/* <Link to={getGitHubUrl(pathname)}> */}
      <Button
        iconBefore={<GithubIcon />}
        secondary
        type="button"
        width="200px"
        height="48px"
        onClick={() => signIn('code_from_github_auth')}
      >
        Sign in with Github
      </Button>
      {/* </Link> */}
    </div>
  );
};

export default AuthPage;
