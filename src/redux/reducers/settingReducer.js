import { types } from '../types/types';

const initialState = {
  dataSetting: {}
};

export const settingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SETTING_DATA:
      return {
        ...state,
        dataSetting: action.payload,
      };
    default:
      return state;
  }
}
