import React from "react";
import {NavLink} from "react-router-dom";

import styles from './index.module.scss';

const Logo = () => {
    return (
        <div className={styles.block}>
            <NavLink
                className={styles.link}
                to="/main"
            >
                manaГeR.com
            </NavLink>
        </div>
    );
}

export default Logo;
