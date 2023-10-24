// reducers.js
import { FETCH_DRIVERS_SUCCESS, FETCH_DRIVERS_FAILURE } from './actions';

const initialState = {
  drivers: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DRIVERS_SUCCESS:
      return {
        ...state,
        drivers: action.payload,
        error: null,
      };
    case FETCH_DRIVERS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
