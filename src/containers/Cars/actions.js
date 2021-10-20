export const GET_CARS_REQUEST = 'GET_CARS_REQUEST';
export const GET_CARS_FAILURE = 'GET_CARS_FAILURE';
export const GET_CARS_SUCCESS = 'GET_CARS_SUCCESS';

export const ADD_CAR_REQUEST = 'ADD_CAR_REQUEST';
export const ADD_CAR_FAILURE = 'ADD_CAR_FAILURE';
export const ADD_CAR_SUCCESS = 'ADD_CAR_SUCCESS';

export const EDIT_CAR_REQUEST = 'EDIT_CAR_REQUEST';
export const EDIT_CAR_FAILURE = 'EDIT_CAR_FAILURE';
export const EDIT_CAR_SUCCESS = 'EDIT_CAR_SUCCESS';

export const DELETE_CAR_REQUEST = 'DELETE_CAR_REQUEST';
export const DELETE_CAR_FAILURE = 'DELETE_CAR_FAILURE';
export const DELETE_CAR_SUCCESS = 'DELETE_CAR_SUCCESS';

export const GET_MAKES_REQUEST = 'GET_MAKES_REQUEST';
export const GET_MAKES_FAILURE = 'GET_MAKES_FAILURE';
export const GET_MAKES_SUCCESS = 'GET_MAKES_SUCCESS';

// --- GET CARS

export const getCarsRequest = () => ({
  type: GET_CARS_REQUEST,
});

export const getCarsFailure = (errorMessage) => ({
  type: GET_CARS_FAILURE,
  payload: errorMessage,
});

export const getCarsSuccess = (cars) => ({
  type: GET_CARS_SUCCESS,
  payload: cars,
});

// --- ADD CAR

export const addCarRequest = (newCarData) => ({
  type: ADD_CAR_REQUEST,
  payload: newCarData,
});

export const addCarFailure = (errorMessage) => ({
  type: ADD_CAR_FAILURE,
  payload: errorMessage,
});

export const addCarSuccess = (newCar) => ({
  type: ADD_CAR_SUCCESS,
  payload: newCar,
});

// --- EDIT CAR

export const editCarRequest = (cardId, field, value) => ({
  type: EDIT_CAR_REQUEST,
  payload: {
    cardId,
    field,
    value,
  },
});

export const editCarFailure = (errorMessage) => ({
  type: EDIT_CAR_FAILURE,
  payload: errorMessage,
});

export const editCarSuccess = (updatedCar) => ({
  type: EDIT_CAR_SUCCESS,
  payload: updatedCar,
});

// --- DELETE CAR

export const deleteCarRequest = (cardId) => ({
  type: DELETE_CAR_REQUEST,
  payload: {
    cardId,
  },
});

export const deleteCarFailure = (errorMessage) => ({
  type: DELETE_CAR_FAILURE,
  payload: errorMessage,
});

export const deleteCarSuccess = (deletedCar) => ({
  type: DELETE_CAR_SUCCESS,
  payload: deletedCar,
});

// --- GET MAKES

export const getMakesRequest = () => ({
  type: GET_MAKES_REQUEST,
});

export const getMakesFailure = (errorMessage) => ({
  type: GET_MAKES_FAILURE,
  payload: errorMessage,
});

export const getMakesSuccess = (makes) => ({
  type: GET_MAKES_SUCCESS,
  payload: makes,
});
