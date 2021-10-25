import React from 'react';
import styled from 'styled-components';
import { compose } from 'recompose';
import CarsContainer from 'containers/Cars';
import RedirectButton from 'components/Buttons/RedirectButton';
import PageHeader from 'parts/PageHeader';
import { reduxForm } from 'redux-form';
import { editCarRequest } from 'containers/Cars/actions';
import EditCarForm from './components/EditCarForm';

const CarPageWrapper = styled.div`
  width: 95%;
  display: block;
  margin: 0 auto;
  padding-top: 50px;
`;

const CarPage = (props) => {
  return (
    <CarPageWrapper>
      <PageHeader title="Edit Car" />
      <EditCarForm {...props} />
      <RedirectButton
        title="See Saved Cars"
        redirectTo="/cars"
      ></RedirectButton>
    </CarPageWrapper>
  );
};

export default compose(
  reduxForm({
    form: 'EDIT_CAR_FORM',
    onSubmit: (carId, values) => editCarRequest(carId, values),
    submitAsSideEffect: true,
    enableReinitialize: true,
  }),
  CarsContainer
)(CarPage);
