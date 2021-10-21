import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import history from 'utils/history';
import throttle from 'lodash/throttle';
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

import { loadState, saveState } from 'utils/localStorage';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}) {
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares)];

  const persistedState = loadState();


  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer(history),
    // initialState,
    persistedState,
    composeEnhancers(...enhancers)
  );

  store.subscribe(
    throttle(() => {
      saveState({
        CARS: store.getState().CARS,
      });
    }, 1000)
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
