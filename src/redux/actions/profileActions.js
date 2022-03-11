import { types, request } from '../types/types';
import { useRequest } from '../../hooks/useRequest';

// eslint-disable-next-line react-hooks/rules-of-hooks
const { post } = useRequest();

export const loadProfileData = (id) => async dispatch => {
  let URL = `${request.PATH}profile/show`;
  const formData = new FormData();
  formData.set('id', id)

  try {
    const data = await post(URL, formData);

    dispatch({
      type: types.SET_PROFILE_DATA,
      payload: data,
    })
  } catch (e) {
    console.log(e)
  }
};
