import React from "react";
import classes from "classnames";

import {NavLink} from "react-router-dom";
import {translate, translateString} from "../../i18n/translate";

import styles from './index.module.scss';


const Login = () => {
    return (
        <div className={styles.block}>
            <div className={classes("container-fluid", styles.fluid)}>
                <div className={classes("container", styles.container)}>
                    <div className={styles.form}>
                        <div className={styles.wrapper}>
                            <div className={styles.title}>{translate('popup_title_login')}</div>
                        </div>
                        <div className={classes(styles.wrapper, styles.mail)}>
                            <input
                                type="email"
                                className={styles.field}
                                placeholder={translateString('popup_field_email')}
                            />
                        </div>
                        <div className={classes(styles.wrapper, styles.password)}>
                            <input
                                type="password"
                                className={styles.field}
                                placeholder={translateString('popup_field_password')}
                            />
                        </div>
                        <div className={styles.wrapper}>
                            <NavLink
                                className={styles.link}
                                to="/recovery"
                            >
                                {translate('popup_forgot_link')}
                            </NavLink>
                        </div>
                        <div className={styles.wrapper}>
                            <button className={styles.button}>
                                {translate('popup_button_1')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
