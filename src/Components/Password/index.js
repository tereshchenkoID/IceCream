import React, {useState} from "react";
import classes from "classnames";

import {translateString} from "../../i18n/translate";

import styles from './index.module.scss';

const Password = ({
    data,
    action,
    required,
    placeholder
}) => {
    const [show, setShow] = useState(false)

    return (
        <div className={styles.block}>
            <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                    <path d="M25.1,46.1c-8.7,0-15.7-7-15.7-15.7v-4.6c0-3.3,2.7-5.9,5.9-5.9h19.5c3.3,0,5.9,2.7,5.9,5.9v4.6 C40.8,39,33.7,46.1,25.1,46.1z M15.3,21.8c-2.2,0-3.9,1.8-3.9,3.9v4.6c0,7.6,6.1,13.7,13.7,13.7s13.7-6.1,13.7-13.7v-4.6 c0-2.2-1.8-3.9-3.9-3.9H15.3z"/>
                    <path d="M34.3,21.8c-0.6,0-1-0.4-1-1V18c0-4.5-3.7-8.2-8.2-8.2s-8.2,3.7-8.2,8.2v2.8c0,0.6-0.4,1-1,1 c-0.6,0-1-0.4-1-1V18c0-5.6,4.6-10.2,10.2-10.2S35.3,12.4,35.3,18v2.8C35.3,21.3,34.8,21.8,34.3,21.8z"/>
                    <path d="M25.1,36.4c-0.6,0-1-0.4-1-1v-5.5c0-0.6,0.4-1,1-1s1,0.4,1,1v5.5C26.1,36,25.6,36.4,25.1,36.4z"/>
                </svg>
            </div>
            <input
                type={show ? "text" : "password"}
                className={styles.field}
                value={data || ''}
                autoComplete={data || ''}
                required={required}
                placeholder={placeholder ? translateString(placeholder) : ''}
                onChange={(e) => action(e.target.value)}
            />
            <div
                className={classes(
                    styles.button,
                    show && styles.active
                )}
                onClick={() => {
                    setShow(!show)
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 224.549 224.549">
                    <path d="M223.476,108.41c-1.779-2.96-44.35-72.503-111.202-72.503S2.851,105.45,1.072,108.41c-1.43,2.378-1.43,5.351,0,7.729 c1.779,2.96,44.35,72.503,111.202,72.503s109.423-69.543,111.202-72.503C224.906,113.761,224.906,110.788,223.476,108.41z M112.274,173.642c-49.925,0-86.176-47.359-95.808-61.374c9.614-14.032,45.761-61.36,95.808-61.36 c49.925,0,86.176,47.359,95.808,61.374C198.468,126.313,162.321,173.642,112.274,173.642z" fill="currentColor"/>
                    <path d="M112.274,61.731c-27.869,0-50.542,22.674-50.542,50.543c0,27.868,22.673,50.54,50.542,50.54 c27.868,0,50.541-22.672,50.541-50.54C162.815,84.405,140.143,61.731,112.274,61.731z M112.274,147.814 c-19.598,0-35.542-15.943-35.542-35.54c0-19.599,15.944-35.543,35.542-35.543s35.541,15.944,35.541,35.543 C147.815,131.871,131.872,147.814,112.274,147.814z" fill="currentColor"/>
                    <path d="M112.274,92.91c-10.702,0-19.372,8.669-19.372,19.364c0,10.694,8.67,19.363,19.372,19.363 c10.703,0,19.373-8.669,19.373-19.363C131.647,101.579,122.977,92.91,112.274,92.91z" fill="currentColor"/>
                </svg>
            </div>
        </div>
    );
}

export default Password;
