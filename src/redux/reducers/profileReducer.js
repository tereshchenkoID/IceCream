import { types } from '../types/types';

const initialState = {
  dataProfile: []
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_PROFILE_DATA:
      return {
        ...state,
        dataProfile: action.payload,
      };
    default:
      return state;
  }
}
