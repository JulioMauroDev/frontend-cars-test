import React from 'react';
import styled from 'styled-components';
import { Field, change } from 'redux-form';
import TextInput from 'components/TextInput';
import Dropdown from 'components/Dropdown';

const AddCarFormWrapper = styled.form``;

const AddCarForm = (props) => {
  const { handleSubmit, makes, addCarFormValues } = props;

  const [isFormValid, setIsFormValid] = React.useState(false);

  React.useEffect(() => {
    addCarFormValues['make']?.length > 0 &&
    addCarFormValues['model']?.length > 0 &&
    addCarFormValues['colour']?.length > 0 &&
    addCarFormValues['year']?.length > 0
      ? setIsFormValid(true)
      : setIsFormValid(false);
  }, [addCarFormValues]);

  const handleMakeSelect = (make) => {
    change('make', make);
  };

  console.log(props);
  return (
    <AddCarFormWrapper onSubmit={handleSubmit}>
      <Field
        name="make"
        component={Dropdown}
        onChange={handleMakeSelect}
        props={{
          placeholder: 'Car make...',
          withValidationIcon: true,
          values: makes,
        }}
      />
      <Field
        name="model"
        component={TextInput}
        props={{
          placeholder: 'Car model...',
          withValidationIcon: true,
          // validation: modelValidation,
        }}
      />
      <Field
        name="colour"
        component={TextInput}
        props={{
          placeholder: 'Car colour...',
          withValidationIcon: true,
          // validation: colourValidation,
        }}
      />
      <Field
        name="year"
        component={TextInput}
        props={{
          placeholder: 'Car Year...',
          withValidationIcon: true,
          // validation: yearValidation,
        }}
      />

      <button disabled={!isFormValid} type="submit">
        Submit
      </button>
    </AddCarFormWrapper>
  );
};

export default AddCarForm;
