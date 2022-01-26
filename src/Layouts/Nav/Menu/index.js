import React from "react";
import classes from 'classnames';
import {NavLink} from "react-router-dom";

import styles from './index.module.scss';

import {translate} from "../../../i18n/translate";

const Menu = ({active, setActive}) => {

    return (
        <ul className={classes(styles.block, active && styles.active)}>
            <li className={styles.item}>
                <span
                    className={styles.icon}
                    onClick={() => setActive(!active)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M12,11.2928932 L16.1464466,7.14644661 C16.3417088,6.95118446 16.6582912,6.95118446 16.8535534,7.14644661 C17.0488155,7.34170876 17.0488155,7.65829124 16.8535534,7.85355339 L12.7071068,12 L16.8535534,16.1464466 C17.0488155,16.3417088 17.0488155,16.6582912 16.8535534,16.8535534 C16.6582912,17.0488155 16.3417088,17.0488155 16.1464466,16.8535534 L12,12.7071068 L7.85355339,16.8535534 C7.65829124,17.0488155 7.34170876,17.0488155 7.14644661,16.8535534 C6.95118446,16.6582912 6.95118446,16.3417088 7.14644661,16.1464466 L11.2928932,12 L7.14644661,7.85355339 C6.95118446,7.65829124 6.95118446,7.34170876 7.14644661,7.14644661 C7.34170876,6.95118446 7.65829124,6.95118446 7.85355339,7.14644661 L12,11.2928932 Z"/>
                    </svg>
                </span>
            </li>
            <li className={styles.item}>
                <NavLink
                    activeClassName={styles.active}
                    className={styles.link}
                    to="/about"
                    onClick={() => setActive(false)}
                >
                    {translate("menu_link_9")}
                </NavLink>
            </li>
            <li className={styles.item}>
                <NavLink
                    activeClassName={styles.active}
                    className={styles.link}
                    to="/search/0"
                    onClick={() => setActive(false)}
                >
                    {translate("menu_link_2")}
                </NavLink>
            </li>
            <li className={styles.item}>
                <NavLink
                    activeClassName={styles.active}
                    className={styles.link}
                    to="/favourite"
                    onClick={() => setActive(false)}
                >
                    {translate("menu_link_3")}
                </NavLink>
            </li>
            <li className={styles.item}>
                <NavLink
                    activeClassName={styles.active}
                    className={styles.link}
                    to="/team"
                    onClick={() => setActive(false)}
                >
                    {translate("menu_link_4")}
                </NavLink>
            </li>
            <li className={styles.item}>
                <NavLink
                    activeClassName={styles.active}
                    className={styles.link}
                    to="/contact"
                    onClick={() => setActive(false)}
                >
                    {translate("menu_link_8")}
                </NavLink>
            </li>
        </ul>
    );
}

export default Menu;
