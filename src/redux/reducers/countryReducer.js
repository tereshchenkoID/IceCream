import { types } from '../types/types';

const initialState = {
  dataCountry: []
};

export const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_COUNTRY_DATA:
      return {
        ...state,
        dataCountry: action.payload,
      };
    default:
      return state;
  }
}
