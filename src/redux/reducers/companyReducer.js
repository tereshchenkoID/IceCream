import { types } from '../types/types';

const initialState = {
  dataCompany: []
};

export const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_COMPANY_DATA:
      return {
        ...state,
        dataCompany: action.payload,
      };
    default:
      return state;
  }
}
