import { takeLatest, call, put, select } from 'redux-saga/effects';
import { v4 } from 'node-uuid';
import { apiGetMakes } from './api';
import { push } from 'connected-react-router';
import store from 'store';
import { selectCars } from './selectors';

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
    const carId = yield v4();

    yield (action.payload['id'] = carId);

    yield put(addCarSuccess(action.payload));

    yield put(push('/cars'));
  } catch (error) {
    console.log(error);
    // const errorMessage = yield error.toJSON().message;
    yield put(addCarFailure(error));
  }
}

function* editCarWorker(action) {
  try {
    const selectedCarId = action.payload.cardId;

    const carsSelector = yield select(selectCars);

    const currentCarIndex = carsSelector
      .map((car, index) => {
        if (car.id === selectedCarId) {
          return index;
        }
      })
      .filter((x) => x !== undefined)[0];

    let updatedCars = carsSelector;

    yield (updatedCars[currentCarIndex] = action.payload.values);

    console.log('currentCarIndex');
    console.log(currentCarIndex);
    // console.log('carsSelector')
    // console.log(carsSelector)
    // console.log('updatedCars')
    // console.log(updatedCars)

    // yield put(editCarSuccess(updatedCars));

    // yield put(push('/cars'));
  } catch (error) {
    console.log(error);
    // const errorMessage = yield error.toJSON().message;
    yield put(editCarFailure(error));
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
  yield takeLatest(EDIT_CAR_REQUEST, editCarWorker);
}
