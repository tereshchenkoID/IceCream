import { types } from "../types/types";
import { useRequest } from "../../hooks/useRequest";

// eslint-disable-next-line react-hooks/rules-of-hooks
const { get } = useRequest();

export const loadSettingData = () => async dispatch => {
  let URL = "https://global-workers.eu/API/setting.json";
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
