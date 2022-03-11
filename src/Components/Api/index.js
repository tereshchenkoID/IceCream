import {useEffect} from "react";
import {useDispatch} from "react-redux";

import { loadSettingData } from '../../redux/actions/settingActions';
import { loadCardData } from '../../redux/actions/cardActions';
import { loadProfileData } from "../../redux/actions/profileActions";

const Api = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadSettingData());
        dispatch(loadCardData());
        localStorage.getItem('user_id') && dispatch(loadProfileData(localStorage.getItem('user_id')))
    }, [dispatch]);

    return true;
}

export default Api;
