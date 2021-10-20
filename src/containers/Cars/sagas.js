import { takeLatest, call, put } from 'redux-saga/effects';

import { apiGetMakes } from './api';

import {
  GET_CARS_REQUEST,
  ADD_CAR_REQUEST,
  EDIT_CAR_REQUEST,
  DELETE_CAR_REQUEST,
  GET_MAKES_REQUEST,
  getCarsFailure,
  getCarsSuccess,
  addCarFailure,
  addCarSuccess,
  editCarFailure,
  editCarSuccess,
  deleteCarFailure,
  deleteCarSuccess,
  getMakesFailure,
  getMakesSuccess,
} from './actions';

function* getCarsWorker(action) {
  try {
    yield put(getCarsSuccess());
  } catch (error) {
    const errorMessage = yield error.toJSON().message;
    yield put(getCarsFailure(errorMessage));
  }
}

function* addCarWorker(action) {
  try {
    yield put(addCarSuccess());
  } catch (error) {
    const errorMessage = yield error.toJSON().message;
    yield put(addCarFailure(errorMessage));
  }
}

function* getMakesWorker(action) {
  try {
    const apiResult = yield call(apiGetMakes, action.payload);

    const makes = [
      ...new Set(
        apiResult.data.Results.map((make) => {
          return make.Mfr_CommonName;
        })
      ),
    ].filter((x) => x);

    makes.sort();

    yield put(getMakesSuccess(makes));
  } catch (error) {
    const errorMessage = yield error.toJSON().message;
    yield put(getMakesFailure(errorMessage));
  }
}

export default function* watcher() {
  yield takeLatest(GET_CARS_REQUEST, getCarsWorker);
  yield takeLatest(ADD_CAR_REQUEST, addCarWorker);
  yield takeLatest(GET_MAKES_REQUEST, getMakesWorker);
}