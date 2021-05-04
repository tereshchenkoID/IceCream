import React from "react";
import {NavLink} from "react-router-dom";

import classes from "classnames";

import styles from './index.module.scss';

const Logo = ({isLight}) => {
    return (
        <div className={classes(styles.block, isLight && styles.light)}>
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
