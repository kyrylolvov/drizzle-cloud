import React from 'react';
import ReactSelect, { ActionMeta, SingleValue } from 'react-select';

import * as css from './css';

interface ISelectProps {
  label: string;
  placeholder: string;
  value: string;
  options: { value: string; label: string }[];
  handleChange: ((newValue: SingleValue<string>, actionMeta: ActionMeta<string>) => void) | undefined;
}

const Select: React.FC<ISelectProps> = ({ label, placeholder, value, options, handleChange }) => (
  <div>
    <p css={css.selectLabel}>{label}</p>
    <ReactSelect
      classNamePrefix="react-select"
      css={css.select}
      value={value}
      // @ts-ignore
      options={options}
      placeholder={placeholder}
      onChange={handleChange}
    />
  </div>
);

export default Select;
