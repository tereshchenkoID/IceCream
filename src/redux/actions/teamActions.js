import { types } from '../types/types';

// eslint-disable-next-line react-hooks/rules-of-hooks

export const setTeamData = (val) => async dispatch => {
  try {
    dispatch({
      type: types.SET_TEAM_DATA,
      payload: val,
    })
  } catch (e) {
    console.log(e)
  }
};
