import React from "react";

import {NavLink} from "react-router-dom";

import styles from './index.module.scss';

const Logo = ({isLight}) => {
    const path = isLight ? 'logo-white' : 'logo'
    return (
        <div className={styles.block}>
            <NavLink
                to="/"
            >
                <img src={`/img/${path}.webp`}
                     alt="Global Workers"
                     loading={"lazy"}
                />
            </NavLink>
        </div>
    );
}

export default Logo;
