import {
  GET_CARS_REQUEST,
  GET_CARS_FAILURE,
  GET_CARS_SUCCESS,
  ADD_CAR_REQUEST,
  ADD_CAR_FAILURE,
  ADD_CAR_SUCCESS,
  EDIT_CAR_REQUEST,
  EDIT_CAR_FAILURE,
  EDIT_CAR_SUCCESS,
  DELETE_CAR_REQUEST,
  DELETE_CAR_FAILURE,
  DELETE_CAR_SUCCESS,
  GET_MAKES_REQUEST,
  GET_MAKES_FAILURE,
  GET_MAKES_SUCCESS,
} from './actions';

const initialState = {
  loading: false,
  errorMessage: null,
  makes: null,
  cars: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // ---

    case GET_CARS_REQUEST: {
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    }

    case GET_CARS_FAILURE: {
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.errorMessage,
      };
    }

    case GET_CARS_SUCCESS: {
      return {
        ...state,
        loading: false,
        errorMessage: null,
        cars: action.payload,
      };
    }

    // ---

    case GET_MAKES_REQUEST: {
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    }

    case GET_MAKES_FAILURE: {
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.errorMessage,
      };
    }

    case GET_MAKES_SUCCESS: {
      return {
        ...state,
        loading: false,
        errorMessage: null,
        makes: action.payload,
      };
    }

    // ---

    case ADD_CAR_REQUEST: {
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    }

    case ADD_CAR_FAILURE: {
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    }

    case ADD_CAR_SUCCESS: {
      return {
        ...state,
        loading: false,
        errorMessage: null,
        cars: [...state.cars, action.payload],
      };
    }

    default:
      return state;
  }
}
