import React, {useState} from "react";
import classes from "classnames";

import {LOCALES} from "../../../i18n";

import styles from './index.module.scss';

const setLanguage = (lang) => {
    localStorage.setItem('language', JSON.stringify(lang));
};

const Lang = ({lang, setLang}) => {
    const [active, setActive] = useState(lang);
    const [dropdown, setDropdown] = useState(false);

    const handleButton = (lang) => {
        setLanguage(lang)

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
                    <span className={styles.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
                          <path fill="#012169" d="M0 0h640v480H0z"/>
                          <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
                          <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
                          <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
                          <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
                        </svg>
                    </span>
                    EN
                </button>
                <button
                    className={classes(styles.button, active === 'de-de' && styles.active)}
                    onClick={() => handleButton('GERMAN')}
                >
                    <span className={styles.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
                          <path fill="#ffce00" d="M0 320h640v160H0z"/>
                          <path d="M0 0h640v160H0z"/>
                          <path fill="#d00" d="M0 160h640v160H0z"/>
                        </svg>
                    </span>
                    DE
                </button>
                <button
                    className={classes(styles.button, active === 'uk-ua' && styles.active)}
                    onClick={() => handleButton('UKRAINIAN')}
                >
                    <span className={styles.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
                            <g fillRule="evenodd" strokeWidth="1pt">
                                <path fill="#ffd700" d="M0 0h640v480H0z"/>
                                <path fill="#0057b8" d="M0 0h640v240H0z"/>
                            </g>
                        </svg>
                    </span>
                    UK
                </button>
                <button
                    className={classes(styles.button, active === 'ru-ru' && styles.active)}
                    onClick={() => handleButton('RUSSIAN')}
                >
                    <span className={styles.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
                          <g fillRule="evenodd" strokeWidth="1pt">
                            <path fill="#fff" d="M0 0h640v480H0z"/>
                            <path fill="#0039a6" d="M0 160h640v320H0z"/>
                            <path fill="#d52b1e" d="M0 320h640v160H0z"/>
                          </g>
                        </svg>
                    </span>
                    RU
                </button>
            </div>
        </div>
    );
}

export default Lang;
