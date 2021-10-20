import AppWrapper from 'components/AppWrapper';
import CarsPage from 'pages/Cars';
import { Provider as StoreProvider } from 'react-redux';
import store from 'store';

const App = () => {
  return (
    <StoreProvider store={store}>
      <AppWrapper>
        <CarsPage />
      </AppWrapper>
    </StoreProvider>
  );
};

export default App;
