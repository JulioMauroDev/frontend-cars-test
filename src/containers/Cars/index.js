import { connect } from 'react-redux';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { formValueSelector } from 'redux-form';
import { reduxForm } from 'redux-form';

import {
  getCarsRequest,
  addCarRequest,
  editCarRequest,
  deleteCarRequest,
  getMakesRequest,
} from './actions';

import {
  selectIsLoading,
  selectErrorMessage,
  selectMakes,
  selectCars,
} from './selectors';

export const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
  errorMessage: selectErrorMessage,
  makes: selectMakes,
  cars: selectCars,
  addCarFormValues: (state) =>
    formValueSelector('ADD_CAR_FORM')(state, 'make', 'model', 'colour', 'year'),
});

export const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getCarsRequest,
      addCarRequest,
      editCarRequest,
      deleteCarRequest,
      getMakesRequest,
    },
    dispatch
  );

export default compose(connect(mapStateToProps, mapDispatchToProps));
