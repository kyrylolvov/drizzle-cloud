import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import * as css from './css';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
  width?: string;
  height?: string;
}

const Button: FC<IButtonProps> = ({ children, iconBefore, iconAfter, width, height, style, secondary, ...props }) => (
  <button
    {...props}
    css={css.button({ iconPosition: iconBefore ? 'before' : 'after', secondary })}
    style={{ width, height, ...style }}
  >
    {iconBefore} {children} {iconAfter}
  </button>
);

Button.defaultProps = {
  secondary: false,
  iconBefore: undefined,
  iconAfter: undefined,
  width: '100%',
  height: '54px',
};

export default Button;
