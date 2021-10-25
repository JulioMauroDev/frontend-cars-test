import React from 'react';
import styled from 'styled-components';
import { Field, change } from 'redux-form';
import TextInput from './TextInput';
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
    deleteCarRequest
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

  const currentCar = cars[currentCarId];

  // const carDefaultValues = cars.filter((car) => car.id === currentCarId)[0];

  const carDefaultValues = cars[currentCarId];

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
          initialValue: currentCar.make,
        }}
      />
      <Field
        name="model"
        component={TextInput}
        props={{
          placeholder: carDefaultValues?.model,
          withValidationIcon: true,
          initialValue: currentCar.model,
          // validation: modelValidation,
        }}
      />
      <Field
        name="colour"
        component={TextInput}
        props={{
          placeholder: carDefaultValues?.colour,
          withValidationIcon: true,
          initialValue: currentCar.colour,
          // validation: colourValidation,
        }}
      />
      <Field
        name="year"
        component={TextInput}
        props={{
          placeholder: carDefaultValues?.year,
          withValidationIcon: true,
          initialValue: currentCar.year,
          // validation: yearValidation,
        }}
      />

      <button type="submit">Update Car</button>
      <button type="button" onClick={()=> deleteCarRequest(currentCarId)}>Delete Car</button>
    </EditCarFormWrapper>
  );
};

export default EditCarForm;
