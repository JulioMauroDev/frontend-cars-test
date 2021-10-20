import React from 'react';
import styled from 'styled-components';
import { Field, change } from 'redux-form';
const DropdownWrapper = styled.div``;

const Dropdown = (props) => {
  const { values, label, input } = props;

  const [selectedOption, setSelectedOption] = React.useState(null);

  React.useEffect(() => {
    selectedOption && input.onChange(selectedOption);
  }, [selectedOption]);

  return (
    values && (
      <DropdownWrapper>
        <label htmlFor={label}>{label}</label>
        <select
          name={label}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="">Select Car Make</option>
          {values.map((make) => {
            return (
              <option key={make} value={make}>
                {make}
              </option>
            );
          })}
        </select>
      </DropdownWrapper>
    )
  );
};

export default Dropdown;
