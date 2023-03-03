import React, { ButtonHTMLAttributes, FC } from 'react';

import * as css from './css';

const IconButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => (
  <button {...props} css={css.iconButton}>
    {children}
  </button>
);

export default IconButton;
