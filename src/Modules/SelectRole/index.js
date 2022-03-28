import React, {useState} from "react";
import {useDispatch} from "react-redux";

import classes from "classnames";

import {setUserData} from "../../redux/actions/userActions";

import {translate} from "../../i18n/translate";

import styles from './index.module.scss';

const getRole = () => {
    return parseInt(localStorage.getItem('user_role'), 10)
}

const SelectRole = () => {
    const dispatch = useDispatch();

    const [role, setRole] = useState(getRole() ? getRole() : 0)
    const [hide, setHide] = useState(role !== 0)

    const handleSubmit = (data) => {
        setRole(data)
        setHide(true)

        dispatch(setUserData(data))

        localStorage.setItem('user_role', data)
    }

    return (
        <div className={classes(
            styles.block,
            hide && styles.hide
        )}>
            <div className={styles.check}>
                <input
                    type={'radio'}
                    name={'role'}
                    id={'role-1'}
                    value={1}
                    className={styles.radio}
                    checked={role === 1}
                    onChange={() => handleSubmit(1)}
                />
                <label
                    className={styles.label}
                    htmlFor={'role-1'}
                >
                    {translate('role-1')}
                </label>
            </div>

            <div className={styles.check}>
                <input
                    type={'radio'}
                    name={'role'}
                    id={'role-2'}
                    value={2}
                    className={styles.radio}
                    checked={role === 2}
                    onChange={() => handleSubmit(2)}
                />
                <label
                    className={styles.label}
                    htmlFor={'role-2'}
                >
                    {translate('role-2')}
                </label>
            </div>
        </div>
    )
}

export default SelectRole;
