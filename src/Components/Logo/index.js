import React from "react";

import {NavLink} from "react-router-dom";

import styles from './index.module.scss';

const Logo = () => {
    return (
        <div className={styles.block} style={{backgroundImage: 'url(/img/logo.webp)'}}>
            <NavLink
                to="/main"
            />
        </div>
    );
}

export default Logo;
