import React from "react";
import classes from "classnames";

import {NavLink} from "react-router-dom";

import {translate} from "../../i18n/translate";

import Logo from "../../Components/Logo";

import styles from './index.module.scss';

const Footer = () => {
    return (
        <div className={styles.block}>
            <div className={classes("container-fluid", styles.fluid)}>
                <div className={classes("container", styles.container)}>
                    <div className={styles.logo}>
                        <Logo isLight />
                    </div>
                    <div className={styles.list}>
                        <div className={styles.item}>
                            <div className={styles.text}>Navigation</div>
                        </div>
                        <div className={styles.item}>
                            <NavLink
                                className={styles.link}
                                to="/main"
                            >
                                Home
                            </NavLink>
                        </div>
                        <div className={styles.item}>
                            <NavLink
                                className={styles.link}
                                to="/login"
                            >
                                Login
                            </NavLink>
                        </div>
                        <div className={styles.item}>
                            <NavLink
                                className={styles.link}
                                to="/registration"
                            >
                                Registration
                            </NavLink>
                        </div>
                    </div>
                    <div className={styles.list}>
                        <div className={styles.item}>
                            <div className={styles.text}>Helpful Links</div>
                        </div>
                        <div className={styles.item}>
                            <NavLink
                                className={styles.link}
                                to="/contact"
                            >
                                Contact
                            </NavLink>
                        </div>
                        <div className={styles.item}>
                            <NavLink
                                className={styles.link}
                                to="/privacy"
                            >
                                Privacy Policy
                            </NavLink>
                        </div>
                        <div className={styles.item}>
                            <NavLink
                                className={styles.link}
                                to="/terms"
                            >
                                Terms of Use
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes("container-fluid", styles.fluid)}>
                <div className={classes("container", styles.container)}>
                    <div className={styles.text}>© 2021 website. All Rights Reserved.</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
