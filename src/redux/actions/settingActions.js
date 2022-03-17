import { types, server } from "../types/types";
import { useRequest } from "../../hooks/useRequest";

// eslint-disable-next-line react-hooks/rules-of-hooks
const { get } = useRequest();

export const loadSettingData = () => async dispatch => {
  let URL = `${server.PATH}settings/show`;
  try {
    const data = await get(URL,
        {
            'Content-Type': 'application/json'
        }
    );

    dispatch({
      type: types.SET_SETTING_DATA,
      payload: data,
    })
  } catch (e) {
    console.log(e)
  }
};
