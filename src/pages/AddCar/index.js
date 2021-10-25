import React from 'react';
import styled from 'styled-components';
import { compose } from 'recompose';
import CarsContainer from 'containers/Cars';
import AddCarForm from './components/AddCarForm';
import RedirectButton from 'components/Buttons/RedirectButton';

import { reduxForm } from 'redux-form';
import { addCarRequest } from 'containers/Cars/actions';

import PageHeader from 'parts/PageHeader';

const AddCarPageWrapper = styled.div`
  width: 95%;
  display: block;
  margin: 0 auto;
  padding-top: 50px;
`;

const AddCarPage = (props) => {
  const { getMakesRequest, makes } = props;

  React.useEffect(() => {
    !makes && getMakesRequest();
  }, []);

  return (
    <AddCarPageWrapper>
      <PageHeader title="Add Car" />
      <AddCarForm {...props} />
      <RedirectButton
        title="See Saved Cars"
        redirectTo="/cars"
      ></RedirectButton>
    </AddCarPageWrapper>
  );
};

export default compose(
  reduxForm({
    form: 'ADD_CAR_FORM',
    onSubmit: (values) => addCarRequest(values),
    submitAsSideEffect: true,
  }),
  CarsContainer
)(AddCarPage);
