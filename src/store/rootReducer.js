import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

import { REDUCER_NAME as carsReducerName } from 'containers/Cars/consts';
import carsReducer from 'containers/Cars/reducer';

const rootReducer = (history) =>
  combineReducers({
    form: formReducer,
    router: connectRouter(history),
    [carsReducerName]: carsReducer,
  });

export default rootReducer;
