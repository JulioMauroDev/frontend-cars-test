import { all, fork } from 'redux-saga/effects';
import carsSaga from 'containers/Cars/sagas';

export default function* rootSaga() {
  yield all([fork(carsSaga)]);
}
