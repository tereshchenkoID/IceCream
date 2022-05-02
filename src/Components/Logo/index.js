import React from "react";

import {NavLink} from "react-router-dom";

import styles from './index.module.scss';

const Logo = () => {
    return (
        <div className={styles.block}>
            <NavLink
                to="/"
                className={styles.link}
            >
                <img
                    src={'/img/logo.webp'}
                    alt={'Logo'}
                    loading={'lazy'}
                />
            </NavLink>
        </div>
    );
}

export default Logo;
