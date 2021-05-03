import React, {useState} from "react";
import classes from "classnames";

import styles from './index.module.scss';

import {LOCALES} from "../../../i18n";

const Lang = ({lang, setLang}) => {
    const [active, setActive] = useState(lang);
    const [dropdown, setDropdown] = useState(false);

    const handleButton = (lang) => {
        setLang(LOCALES[lang])
        setActive(LOCALES[lang])
        setDropdown(!dropdown)
    };

    return (
        <div className={classes(styles.block, dropdown && styles.active)}>
            <div
                className={styles.checked}
                onClick={() => setDropdown(!dropdown)}
            >
                <div className={styles.text}>
                    {active.substr(0, 2)}
                </div>
                <div className={styles.arrow}>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 6L4.99998 0L0 6L10 6Z" fill="#000"/>
                    </svg>
                </div>
            </div>

            <div className={styles.dropdown}>
                <button
                    className={classes(styles.button, active === 'en-us' && styles.active)}
                    onClick={() => handleButton('ENGLISH')}
                >
                    EN
                </button>
                <button
                    className={classes(styles.button, active === 'de-de' && styles.active)}
                    onClick={() => handleButton('GERMAN')}
                >
                    DE
                </button>
            </div>
        </div>
    );
}

export default Lang;
