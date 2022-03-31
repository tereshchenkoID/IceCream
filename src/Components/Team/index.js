import React from "react";
import {useDispatch, useSelector} from "react-redux";
import classes from 'classnames';

import {translate} from "../../i18n/translate";

import {setTeamData} from "../../redux/actions/teamActions";

import styles from './index.module.scss';

const addTeam = (id, team) => {
    const arr = team.slice();

    arr.find((e) => { return e === id }) ? arr.splice(arr.indexOf(id), 1) : arr.push(id)
    localStorage.setItem('team', JSON.stringify(arr));

    return arr
};

const getTeam = (id, team) => {
    return team.find((e) => {return e === id});
}

const Team = ({ id }) => {
    const dispatch = useDispatch();

    const { team } = useSelector(state => state.teamReducer)

    return (
        <button
            className={classes(
                styles.block,
                getTeam(id, team) && styles.active
            )}
            onClick={() => {
                dispatch(setTeamData(addTeam(id, team)))
            }}
        >
            {
                getTeam(id, team)
                ?
                    translate('profile_button_remove')
                :
                    translate('profile_button_send')
            }
        </button>
    );
}

export default Team;
