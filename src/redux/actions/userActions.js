import { types } from '../types/types';
// import { useRequest } from '../../hooks/useRequest';

// eslint-disable-next-line react-hooks/rules-of-hooks
// const { get } = useRequest();

const data = {
    "role": 2
}

// 1 - user
// 2 - company
// 3 - admin

export const loadUserData = () => async dispatch => {
  // let URL = 'https://api.absolute.bet/feed/?key=sports-tree';
  try {
    // const JSON = await get(URL);
    dispatch({
      type: types.SET_USER_DATA,
      payload: data,
    })
  } catch (e) {
    console.log(e)
  }
};


export const changeUserData = (item) => {
  return {
    type: types.CHANGE_USER_DATA,
    payload: item
  }
}
