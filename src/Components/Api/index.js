import {useEffect} from "react";
import {useDispatch} from "react-redux";

import { loadSettingData } from '../../redux/actions/settingActions';
import { loadCardData } from '../../redux/actions/cardActions';
import { loadProfileData } from "../../redux/actions/profileActions";

const Api = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.getItem('user_token') && dispatch(loadProfileData())

        dispatch(loadSettingData())
        dispatch(loadCardData())
    }, [dispatch]);

    return true;
}

export default Api;
