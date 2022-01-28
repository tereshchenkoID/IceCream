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
                <picture>
                    <source srcSet={`/img/logo/1x/${path}.webp 1x, /img/logo/2x/${path}@2x.webp 2x`}/>
                    <img
                        src={`/img/logo/1x/${path}.webp`}
                        alt={"Global Workers"}
                        loading={"lazy"}
                    />
                </picture>
            </NavLink>
        </div>
    );
}

export default Logo;
