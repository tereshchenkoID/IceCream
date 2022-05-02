import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {setModeData} from "../../redux/actions/modeActions";

import classes from "classnames";

import styles from './index.module.scss';

const Toggle = () => {
    const dispatch = useDispatch();

    const { mode } = useSelector(state => state.modeReducer)

    const handleClick = () => {
        const style = mode === 'dark' ? 'light' : 'dark'

        localStorage.setItem('mode', style);
        dispatch(setModeData(style))

        document.documentElement.setAttribute("data-theme", style);
    }

    return (
        <div className={styles.block}>
            <div className={styles.icon}>
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.84375 16C11.3125 16 13.5625 14.9062 15.0625 13.0625C15.2812 12.7812 15.0312 12.375 14.6875 12.4375C10.8125 13.1875 7.25 10.2188 7.25 6.28125C7.25 4.03125 8.4375 1.96875 10.4062 0.84375C10.7188 0.65625 10.625 0.21875 10.2812 0.15625C9.8125 0.0625 9.34375 0.03125 8.84375 0C4.40625 0 0.84375 3.59375 0.84375 8C0.84375 12.4375 4.40625 16 8.84375 16Z"
                        fill="white"
                    />
                </svg>
            </div>
            <div
                className={classes(styles.item, mode === 'light' && styles.active)}
                onClick={(e) => handleClick()}
            >
                <div className={styles.slide} />
            </div>
            <div className={styles.icon}>
                <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9 6C7.34375 6 6 7.375 6 9C6 10.6562 7.34375 12 9 12C10.625 12 12 10.6562 12 9C12 7.375 10.625 6 9 6ZM16.6875 8.53125L13.7188 7.0625L14.7812 3.90625C14.9062 3.5 14.5 3.09375 14.0938 3.21875L10.9375 4.28125L9.46875 1.3125C9.28125 0.90625 8.6875 0.90625 8.5 1.3125L7.03125 4.28125L3.875 3.21875C3.46875 3.09375 3.0625 3.5 3.1875 3.90625L4.25 7.0625L1.28125 8.53125C0.875 8.71875 0.875 9.3125 1.28125 9.5L4.25 10.9688L3.1875 14.125C3.0625 14.5312 3.46875 14.9375 3.875 14.8125L7.03125 13.75L8.5 16.7188C8.6875 17.125 9.28125 17.125 9.46875 16.7188L10.9375 13.75L14.0938 14.8125C14.5 14.9375 14.9062 14.5312 14.7812 14.125L13.7188 10.9688L16.6875 9.5C17.0938 9.3125 17.0938 8.71875 16.6875 8.53125ZM11.8125 11.8438C10.25 13.4062 7.71875 13.4062 6.15625 11.8438C4.59375 10.2812 4.59375 7.75 6.15625 6.1875C7.71875 4.625 10.25 4.625 11.8125 6.1875C13.375 7.75 13.375 10.2812 11.8125 11.8438Z"
                        fill="white"
                    />
                </svg>
            </div>
        </div>
    );
}

export default Toggle;
