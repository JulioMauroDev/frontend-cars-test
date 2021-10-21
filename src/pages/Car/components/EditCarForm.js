import React from 'react';
import styled from 'styled-components';
import { Field, change } from 'redux-form';
import TextInput from 'components/TextInput';
import Dropdown from 'components/Dropdown';

const EditCarFormWrapper = styled.form`
  width: 80%;
  display: block;
  /* margin: 0 auto; */

  > * {
    margin-bottom: 12px;
  }
`;

const EditCarForm = (props) => {
  const {
    handleSubmit,
    makes,
    editCarFormValues,
    history,
    cars,
    editCarRequest,
  } = props;

  const [isFormValid, setIsFormValid] = React.useState(false);

  React.useEffect(() => {
    editCarFormValues['make']?.length > 0 &&
    editCarFormValues['model']?.length > 0 &&
    editCarFormValues['colour']?.length > 0 &&
    editCarFormValues['year']?.length > 0
      ? setIsFormValid(true)
      : setIsFormValid(false);
  }, [editCarFormValues]);

  const handleMakeSelect = (make) => {
    change('make', make);
  };

  const currentCarId = history.location.pathname.replace('/edit-car/', '');

  const carDefaultValues = cars.filter((car) => car.id === currentCarId)[0];

  const handleEdit = (evt) => {
    evt.preventDefault();
    editCarRequest(currentCarId, editCarFormValues);
  };

  return (
    <EditCarFormWrapper onSubmit={handleEdit}>
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
          placeholder: carDefaultValues['model'],
          withValidationIcon: true,
          // validation: modelValidation,
        }}
      />
      <Field
        name="colour"
        component={TextInput}
        props={{
          placeholder: carDefaultValues['colour'],
          withValidationIcon: true,
          // validation: colourValidation,
        }}
      />
      <Field
        name="year"
        component={TextInput}
        props={{
          placeholder: carDefaultValues['year'],
          withValidationIcon: true,
          // validation: yearValidation,
        }}
      />

      <button disabled={!isFormValid} type="submit">
        Update Car
      </button>
    </EditCarFormWrapper>
  );
};

export default EditCarForm;
