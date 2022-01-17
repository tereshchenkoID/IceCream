import React from "react";

import {NavLink} from "react-router-dom";

import styles from './index.module.scss';

const Logo = () => {
    return (
        <div className={styles.block}>
            <NavLink
                to="/main"
            >
                <img src="/img/logo.webp"
                     alt="Global Workers"
                     loading={"lazy"}
                />
            </NavLink>
        </div>
    );
}

export default Logo;
