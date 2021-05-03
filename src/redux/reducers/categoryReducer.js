import { types } from '../types/types';

const initialState = {
  dataCategory: []
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CATEGORY_DATA:
      return {
        ...state,
        dataCategory: action.payload,
      };
    default:
      return state;
  }
}
