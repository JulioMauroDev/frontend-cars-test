import styled from 'styled-components';

const TextInputWrapper = styled.div``;
const TextInput = (field) => {
  return (
    <TextInputWrapper>
      <input {...field.input} type="text" placeholder={field.placeholder} />
      {field.meta.touched && field.meta.error && (
        <span className="error">{field.meta.error}</span>
      )}
    </TextInputWrapper>
  );
};

export default TextInput;
