import AppWrapper from 'components/AppWrapper';
import CarsPage from 'pages/Cars';
import AddCarPage from 'pages/AddCar';
import { Provider as StoreProvider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import history from 'utils/history';
import {
  Router,
  Switch,
  Route,
  Link,
  withRouter,
  Redirect,
} from 'react-router-dom';

import store from 'store';

const App = () => {
  return (
    <StoreProvider store={store}>
      <ConnectedRouter history={history}>
        <AppWrapper>
          <Switch>
            <Redirect exact from="/" to="/cars" />
            <Route
              exact
              key={`/cars`}
              path={`/cars`}
              component={CarsPage}
            ></Route>
            <Route
              exact
              key={`/add-car`}
              path={`/add-car`}
              component={AddCarPage}
            ></Route>
          </Switch>
          {/* <CarsPage /> */}
        </AppWrapper>
      </ConnectedRouter>
    </StoreProvider>
  );
};

export default App;
