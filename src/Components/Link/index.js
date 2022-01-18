import React from "react";
import {NavLink} from "react-router-dom";

import styles from './index.module.scss';

const Link = ({url, text}) => {

    return (
        <div className={styles.block}>
            <NavLink
                to={url}
                className={styles.link}
            >
                {text}
            </NavLink>
        </div>
    );
}

export default Link;
