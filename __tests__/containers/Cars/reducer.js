import CarsReducer from '../../../src/containers/Cars/reducer';

describe('Cars Reducer', () => {
  //TEST INITIAL STATE
  it('has initial state', () => {
    expect(CarsReducer(undefined, { type: 'unexpected' })).toEqual({
      loading: false,
      errorMessage: null,
      makes: null,
      cars: {},
    });
  });

  //TEST GET_CARS_REQUEST
  it('handles GET_CARS_REQUEST', () => {
    expect(
      CarsReducer(undefined, {
        type: 'GET_CARS_REQUEST',
        payload: { cars: {} },
      })
    ).toEqual({
      loading: true,
      errorMessage: null,
      makes: null,
      cars: {},
    });
  });
});
