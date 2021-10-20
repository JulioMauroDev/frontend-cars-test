import { createSelector } from 'reselect';
import _get from 'lodash/fp/get';
import { REDUCER_NAME } from './consts';

export const selectIsLoading = createSelector(
  (state) => state[REDUCER_NAME],
  _get('loading')
);

export const selectErrorMessage = createSelector(
  (state) => state[REDUCER_NAME],
  _get('errorMessage')
);

export const selectMakes = createSelector(
  (state) => state[REDUCER_NAME],
  _get('makes')
);

export const selectCars = createSelector(
  (state) => state[REDUCER_NAME],
  _get('cars')
);
