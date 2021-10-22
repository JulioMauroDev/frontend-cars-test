import React from 'react';
import styled from 'styled-components';
import { change, touch } from 'redux-form';

const TextInputWrapper = styled.div``;

const TextInput = (field) => {
  const { input, placeholder } = field;

  const [value, setValue] = React.useState(field.initialValue);

  // React.useEffect(() => {
  //   change(input.name, value);
  //   touch()
  // }, []);

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
