import React from 'react';
import styled from 'styled-components';
import { Field } from 'redux-form';

const AddCarFormWrapper = styled.form``;

const renderField = (field) => (
  <div className="input-row">
    <input {...field.input} type="text" />
    {field.meta.touched && field.meta.error && (
      <span className="error">{field.meta.error}</span>
    )}
  </div>
);

const AddCarForm = (props) => {
  const { handleSubmit } = props;

  return (
    <AddCarFormWrapper onSubmit={handleSubmit}>
      <Field
        name="make"
        component={renderField}
        props={{
          placeholder: 'Car make...',
          withValidationIcon: true,
          // validation: makeValidation,
        }}
      />
      <Field
        name="model"
        component={renderField}
        props={{
          placeholder: 'Car model...',
          withValidationIcon: true,
          // validation: modelValidation,
        }}
      />
      <Field
        name="colour"
        component={renderField}
        props={{
          placeholder: 'Car colour...',
          withValidationIcon: true,
          // validation: colourValidation,
        }}
      />
      <Field
        name="year"
        component={renderField}
        props={{
          placeholder: 'Car Year...',
          withValidationIcon: true,
          // validation: yearValidation,
        }}
      />

      <button type="submit">Submit</button>
    </AddCarFormWrapper>
  );
};

export default AddCarForm;
