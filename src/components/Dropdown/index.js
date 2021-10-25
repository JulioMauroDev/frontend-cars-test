import React from 'react';
import styled from 'styled-components';
import { Field, change } from 'redux-form';
import { useDispatch } from 'react-redux';
const DropdownWrapper = styled.div``;

const Dropdown = (props) => {
  const { values, label, input, initialValue } = props;

  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = React.useState(null);

  React.useEffect(() => {
    selectedOption && input.onChange(selectedOption);
  }, [selectedOption]);

  React.useEffect(() => {
    if (initialValue) {
      dispatch(change('EDIT_CAR_FORM', input.name, initialValue));
    }
  }, [initialValue, input?.name, dispatch]);

  return (
    values && (
      <DropdownWrapper>
        <label htmlFor={label}>{label}</label>
        <select
          name={label}
          defaultValue={initialValue}
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
