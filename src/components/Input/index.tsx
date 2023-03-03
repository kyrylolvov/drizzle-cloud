import React from 'react';

import * as css from './css';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string | string[];
  placeholder: string;
  onChange?: (e: React.ChangeEvent) => void;
  name?: string;
  type?: 'number' | 'text';
  disabled?: boolean;
}

const Input: React.FC<IInputProps> = ({ label, value, onChange, disabled, placeholder, name, type }) => (
  <div>
    <p css={css.inputLabel}>{label}</p>
    <input
      className="erectus-input"
      value={value}
      name={name}
      type={type}
      onChange={onChange}
      css={css.input}
      placeholder={placeholder}
      disabled={disabled}
    />
  </div>
);

Input.defaultProps = {
  onChange: undefined,
  name: undefined,
  type: 'text',
  disabled: false,
};

export default Input;
