import styled from 'styled-components';

const TextInputWrapper = styled.div``;
const TextInput = (field) => (
  <TextInputWrapper>
    <input {...field.input} type="text" />
    {field.meta.touched && field.meta.error && (
      <span className="error">{field.meta.error}</span>
    )}
  </TextInputWrapper>
);

export default TextInput;
