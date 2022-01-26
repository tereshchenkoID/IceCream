import React from "react";
import {NavLink} from "react-router-dom";

import classes from "classnames";

import {translate} from "../../i18n/translate";

import Logo from "../../Components/Logo";
import Social from "../../Components/Social";

import styles from './index.module.scss';

const Footer = () => {
    return (
        <footer className={styles.block}>
            <div className={styles.top}>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className={classes("col", "col-12", "col-md-6")}>
                                <Logo isLight={true}/>
                            </div>
                            <div className={classes("col", "col-12", "col-md-3", "col-padding-vertical")}>
                                <div className={styles.list}>
                                    <div className={styles.subtitle}>{translate('footer_subtitle_1')}</div>
                                    <div className={styles.item}>
                                        <NavLink
                                            className={styles.link}
                                            to="/about"
                                        >
                                            {translate("menu_link_9")}
                                        </NavLink>
                                    </div>
                                    <div className={styles.item}>
                                        <NavLink
                                            className={styles.link}
                                            to="/search"
                                        >
                                            {translate('menu_link_2')}
                                        </NavLink>
                                    </div>
                                    <div className={styles.item}>
                                        <NavLink
                                            className={styles.link}
                                            to="/favourite"
                                        >
                                            {translate('menu_link_3')}
                                        </NavLink>
                                    </div>
                                    <div className={styles.item}>
                                        <NavLink
                                            className={styles.link}
                                            to="/team"
                                        >
                                            {translate('menu_link_4')}
                                        </NavLink>
                                    </div>
                                    <div className={styles.item}>
                                        <NavLink
                                            className={styles.link}
                                            to="/contact"
                                        >
                                            {translate('menu_link_8')}
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className={classes("col", "col-12", "col-md-3", "col-padding-vertical")}>
                                <div className={styles.list}>
                                    <div className={styles.subtitle}>{translate('footer_subtitle_2')}</div>
                                    <div className={styles.item}>
                                        <NavLink
                                            className={styles.link}
                                            to="../DOC/useful.pdf"
                                            target="_blank"
                                        >
                                            {translate('menu_link_6')}
                                        </NavLink>
                                    </div>
                                    <div className={styles.item}>
                                        <NavLink
                                            className={styles.link}
                                            to="../DOC/confidential.pdf"
                                            target="_blank"
                                        >
                                            {translate('menu_link_7')}
                                        </NavLink>
                                    </div>
                                    <Social />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <div className="container-fluid">
                    <div className="container">
                        <div className={styles.text}>
                            <span>©</span>
                            <span>{ new Date().getFullYear() }</span>
                            <span>Global-Working. {translate('title-reserved')}.</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
