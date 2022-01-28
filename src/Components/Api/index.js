import {useEffect} from "react";
import {useDispatch} from "react-redux";

import { loadSettingData } from '../../redux/actions/settingActions';
import { loadCardData } from '../../redux/actions/cardActions';

const Api = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadSettingData());
        dispatch(loadCardData());
    }, [dispatch]);

    return true;
}

export default Api;
