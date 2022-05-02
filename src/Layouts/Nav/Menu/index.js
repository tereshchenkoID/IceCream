import React from "react";
import {NavLink} from "react-router-dom";

import classes from 'classnames';

import styles from './index.module.scss';

const Menu = ({active, setActive}) => {

    return (
        <ul
            className={classes(
                styles.block,
                active && styles.active
            )}
        >
            <li className={styles.item}>
                <NavLink
                    activeClassName={styles.active}
                    className={styles.link}
                    to="/"
                    exact={true}
                    // onClick={() => setActive(false)}
                >
                    Home
                </NavLink>
            </li>
            <li className={styles.item}>
                <NavLink
                    activeClassName={styles.active}
                    className={styles.link}
                    to="/farm"
                    // onClick={() => setActive(false)}
                >
                    Farm
                </NavLink>
            </li>
            <li className={styles.item}>
                <NavLink
                    activeClassName={styles.active}
                    className={styles.link}
                    to="/boardrooms"
                    // onClick={() => setActive(false)}
                >
                    Boardrooms
                </NavLink>
            </li>
            <li className={styles.item}>
                <NavLink
                    activeClassName={styles.active}
                    className={styles.link}
                    to="/bonds"
                    // onClick={() => setActive(false)}
                >
                    Bonds
                </NavLink>
            </li>
        </ul>
    );
}

export default Menu;
