import React from "react";
import classes from "classnames";

import Logo from "../../Components/Logo";
import Toggle from "../../Components/Toggle";

import styles from './index.module.scss';

const Footer = () => {
    return (
        <footer className={styles.block}>
            <div className={styles.top}>
                <div className={classes("container-fluid", styles.fluid)}>
                    <div className={classes("container", styles.container)}>
                        <div className={classes("row", styles.row)}>
                            <div className={classes("col", "col-12", "col-md-4", "col-padding-vertical")}>
                                <Logo/>
                            </div>
                            <div className={classes("col", "col-12", "col-md-8", "col-padding-vertical")}>
                                <ul className={styles.navigation}>
                                    <li className={styles.item}>
                                        <a
                                            href={"https://discord.gg/icecream"}
                                            className={styles.link}
                                            target={"_blank"}
                                            rel={"noreferrer"}
                                        >
                                            Discord
                                        </a>
                                    </li>
                                    <li className={styles.item}>
                                        <a
                                            href={"https://t.me/icecreamfinance"}
                                            className={styles.link}
                                            target={"_blank"}
                                            rel={"noreferrer"}
                                        >
                                            Telegram
                                        </a>
                                    </li>
                                    <li className={styles.item}>
                                        <a
                                            href={"https://twitter.com/IcecreamFinance"}
                                            className={styles.link}
                                            target={"_blank"}
                                            rel={"noreferrer"}
                                        >
                                            Twitter
                                        </a>
                                    </li>
                                    <li className={styles.item}>
                                        <a
                                            href={"https://icecreamfinancial.gitbook.io/icecream-finance/"}
                                            className={styles.link}
                                            target={"_blank"}
                                            rel={"noreferrer"}
                                        >
                                            GIT Books
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <div className={classes("container-fluid", styles.fluid)}>
                    <div className={classes("container", styles.container)}>
                        <div className={classes("row", styles.row)}>
                            <div className={classes("col", "col-12", "col-md-4", "col-padding-vertical")}>
                                <div className={styles.rules}>
                                    <a
                                        href={"/"}
                                        className={classes(styles.link, styles.sm)}
                                        target={"_blank"}
                                        rel={"noreferrer"}
                                    >
                                        Privacy Policy
                                    </a>
                                    <div className={styles.divider} />
                                    <a
                                        href={"/"}
                                        className={classes(styles.link, styles.sm)}
                                        target={"_blank"}
                                        rel={"noreferrer"}
                                    >
                                        Terms & Conditions
                                    </a>
                                </div>
                            </div>
                            <div className={classes("col", "col-12", "col-md-6", "col-lg-5", "col-padding-vertical")}>
                                <p className={classes(styles.text, styles.sm)}>
                                    © { new Date().getFullYear() }, IceCream Finance. All Rights Reserved
                                </p>
                            </div>
                            <div className={classes("col", "col-12", "col-md-2", "col-lg-3", "col-padding-vertical")}>
                                <div className={styles.toggle}>
                                    <Toggle />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
