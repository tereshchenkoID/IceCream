import { types } from '../types/types';

const initialState = {
  dataCard: []
};

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CARD_DATA:
      return {
        ...state,
        dataCard: action.payload,
      };
    default:
      return state;
  }
}
