import React from 'react';
import styled from 'styled-components';
import { change, touch } from 'redux-form';
import { useDispatch } from 'react-redux';

const TextInputWrapper = styled.div``;

const TextInput = (field) => {
  const { input, placeholder, initialValue } = field;

  const [value, setValue] = React.useState(field.initialValue);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (initialValue) {
      dispatch(change('EDIT_CAR_FORM', input.name, initialValue));
    }
  }, [initialValue, input?.name, dispatch]);

  return (
    <TextInputWrapper>
      <input
        {...input}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
      />
      {field.meta.touched && field.meta.error && (
        <span className="error">{field.meta.error}</span>
      )}
    </TextInputWrapper>
  );
};

export default TextInput;
