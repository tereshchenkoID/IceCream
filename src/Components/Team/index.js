import React from "react";
import classes from 'classnames';

import {translate} from "../../i18n/translate";

import getAllStorage from "../../helpers/localStorage";

import styles from './index.module.scss';

const removeTeam = (id, teamArray, setTeamArray) => {
    const arr = teamArray.slice();

    arr.find((e) => { return e === id })
        ?
    arr.splice(arr.indexOf(id), 1)
        :
    arr.push(id)

    localStorage.setItem('team', JSON.stringify(arr));
    setTeamArray(getAllStorage('team'))
};

const getTeam = (name, teamArray) => {
    return teamArray.find((e) => {return e === name});
}

const Team = ({id, teamArray, setTeamArray}) => {

    return (
        <button
            className={classes(styles.block, getTeam(id, teamArray) && styles.active )}
            onClick={() => removeTeam(id, teamArray, setTeamArray)}
        >
            {
                getTeam(id, teamArray)
                    ?
                translate('card_button_remove')
                    :
                translate('card_button_send')
            }
        </button>
    );
}

export default Team;
