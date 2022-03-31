import { types } from '../types/types';

// eslint-disable-next-line react-hooks/rules-of-hooks

export const setFavouriteData = (val) => async dispatch => {
  try {
    dispatch({
      type: types.SET_FAVOURITE_DATA,
      payload: val,
    })
  } catch (e) {
    console.log(e)
  }
};
