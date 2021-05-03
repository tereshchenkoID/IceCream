import { types } from '../types/types';

const initialState = {
  dataUser: {}
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER_DATA:
      return {
        ...state,
        dataUser: action.payload,
      };
    case types.CHANGE_USER_DATA:
      return {
        ...state,
        dataUser: action.payload,
      };
    default:
      return state;
  }
}
