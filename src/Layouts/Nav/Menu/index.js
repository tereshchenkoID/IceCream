import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import classes from 'classnames';

import styles from './index.module.scss';

import {translate} from "../../../i18n/translate";

const Menu = ({role}) => {
    const location = useLocation();

    const checkLocation = (name) => {
        return location.pathname.indexOf(name) !== -1
    }

    return (
        <menu className={styles.block}>
            <NavLink
                activeClassName={styles.active}
                className={styles.link}
                to="/main"
            >
                {translate("menu_link_1")}
            </NavLink>
            {
                role === 1 &&
                <NavLink
                    activeClassName={styles.active}
                    className={classes(styles.link, checkLocation('search-company') && styles.active)}
                    to="/search-company/0"
                >
                    {translate("menu_link_2")}
                </NavLink>
            }
            {
                role === 2 &&
                <NavLink
                    activeClassName={styles.active}
                    className={classes(styles.link, checkLocation('search-employer') && styles.active)}
                    to="/search-employer/0"
                >
                    {translate("menu_link_3")}
                </NavLink>
            }
        </menu>
    );
}

export default Menu;
