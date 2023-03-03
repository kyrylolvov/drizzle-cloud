import React from 'react';
import ReactSelect, { ActionMeta, GroupBase, OptionsOrGroups, SingleValue } from 'react-select';

import * as css from './css';

interface ISelectProps {
  label: string;
  placeholder: string;
  value: string;
  options: OptionsOrGroups<string, GroupBase<string>> | undefined;
  handleChange: ((newValue: SingleValue<string>, actionMeta: ActionMeta<string>) => void) | undefined;
}

const Select: React.FC<ISelectProps> = ({ label, placeholder, value, options, handleChange }) => (
  <div>
    <p css={css.selectLabel}>{label}</p>
    <ReactSelect
      classNamePrefix="react-select"
      css={css.select}
      value={value}
      options={options}
      placeholder={placeholder}
      onChange={handleChange}
    />
  </div>
);

export default Select;
