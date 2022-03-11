import { types } from '../types/types';

// eslint-disable-next-line react-hooks/rules-of-hooks

export const setUserData = (val) => async dispatch => {
  try {
    dispatch({
      type: types.SET_USER_DATA,
      payload: val,
    })
  } catch (e) {
    console.log(e)
  }
};
