import React from 'react';
import styled from 'styled-components';

const TextInputWrapper = styled.div``;

const TextInput = (field) => {
  const { input, placeholder } = field;

  const [value, setValue] = React.useState(field.initialValue);

//   React.useEffect(()=>{
// if(field.initialValue){

// }
//   },[])

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
