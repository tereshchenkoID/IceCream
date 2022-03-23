import { types, server } from '../types/types';

import redirectLogin from "../../helpers/redirectLogin";
// import { useRequest } from '../../hooks/useRequest';

// eslint-disable-next-line react-hooks/rules-of-hooks
// const { post } = useRequest();

export const loadProfileData = () => async dispatch => {
  const formData = new FormData();

  formData.set('id', localStorage.getItem('user_id'))

  fetch(
    `${server.PATH}user/show`,
    {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('user_token') || null}`
        }
    }
  )
      .then(async response => {
          if (response.status === 401) {
              redirectLogin()
          }
          else {
              const data = await response.json();

              dispatch({
                  type: types.SET_PROFILE_DATA,
                  payload: data,
              })
          }
      })
      .catch(error => console.log("Error", error));

  // try {
  //   const data = await post(
  //       `${server.PATH}user/show`,
  //       formData,
  //       {
  //         'Authorization': `Bearer ${localStorage.getItem('user_token') || null}`
  //       }
  //   );
  //
  //   // if(data === 401) localStorage.clear();
  //
  //   dispatch({
  //     type: types.SET_PROFILE_DATA,
  //     payload: data,
  //   })
  // } catch (e) {
  //   console.log(e)
  // }
};
