import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {setUserData} from "../../redux/actions/userActions";

import {translate} from "../../i18n/translate";

import styles from './index.module.scss';

const SelectRole = () => {
    const dispatch = useDispatch();

    const { user } = useSelector(state => state.userReducer)

    const [role, setRole] = useState(user)

    const handleSubmit = (data) => {
        setRole(data)

        dispatch(setUserData(data))

        localStorage.setItem('user_role', data)
    }

    return (
        <div className={styles.block}>
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
