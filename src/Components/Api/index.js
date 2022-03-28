import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import { loadSettingData } from '../../redux/actions/settingActions';
import { loadCardData } from '../../redux/actions/cardActions';
import { loadProfileData } from "../../redux/actions/profileActions";

const Api = () => {
    const dispatch = useDispatch();

    const { access } = useSelector(state => state.accessReducer)

    useEffect(() => {
        access && dispatch(loadProfileData())

        dispatch(loadSettingData())
        dispatch(loadCardData())
    }, [dispatch, access]);

    return true;
}

export default Api;
