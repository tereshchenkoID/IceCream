import { types, request } from "../types/types";
import { useRequest } from "../../hooks/useRequest";

// eslint-disable-next-line react-hooks/rules-of-hooks
const { get } = useRequest();

export const loadSettingData = () => async dispatch => {
  let URL = `${request.PATH}settings/show`;
  try {
    const data = await get(URL);

    dispatch({
      type: types.SET_SETTING_DATA,
      payload: data,
    })
  } catch (e) {
    console.log(e)
  }
};
