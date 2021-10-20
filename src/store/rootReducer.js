import { combineReducers } from 'redux';

import { REDUCER_NAME as carsReducerName } from 'containers/Cars/consts';
import carsReducer from 'containers/Cars/reducer';

const rootReducer = () =>
  combineReducers({
    [carsReducerName]: carsReducer,
  });

export default rootReducer;
