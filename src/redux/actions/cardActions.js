import { types, request } from '../types/types';
import { useRequest } from '../../hooks/useRequest';

// eslint-disable-next-line react-hooks/rules-of-hooks
const { get } = useRequest();

export const loadCardData = () => async dispatch => {
  let URL = `${request.PATH}profile/show`;
  try {
    const data = await get(URL);

    dispatch({
      type: types.SET_CARD_DATA,
      payload: data,
    })
  } catch (e) {
    console.log(e)
  }
};
