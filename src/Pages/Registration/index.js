import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {translate, translateString} from "../../i18n/translate";

import styles from "./index.module.scss";
import classes from "classnames";

const Registration = () => {
    const [view, setView] = useState(1);

    return (
        <div className={styles.block}>
            <div className={classes("container-fluid", styles.fluid)}>
                <div className={classes("container", styles.container)}>
                    <div className={styles.form}>
                        <div className={styles.header}>
                            <div
                                className={classes(styles.tab, view === 1 && styles.active)}
                                onClick={() => setView(1)}
                            >
                                <div className={styles.title}>{translate('popup_tab_1')}</div>
                            </div>
                            <div
                                className={classes(styles.tab, view === 2 && styles.active)}
                                onClick={() => setView(2)}
                            >
                                <div className={styles.title}>{translate('popup_tab_2')}</div>
                            </div>
                        </div>
                        <div className={styles.body}>
                            {
                                view === 1
                                    ?
                                    <>
                                        <div className={styles.wrapper}>
                                            <input
                                                type="text"
                                                className={styles.field}
                                                placeholder={`${translateString('popup_field_name')} *`}
                                            />
                                        </div>
                                        <div className={styles.wrapper}>
                                            <input
                                                type="text"
                                                className={styles.field}
                                                placeholder={`${translateString('popup_field_last_name')} *`}
                                            />
                                        </div>
                                        <div className={styles.wrapper}>
                                            <input
                                                type="email"
                                                className={styles.field}
                                                placeholder={`${translateString('popup_field_email')} *`}
                                            />
                                        </div>
                                        <div className={styles.wrapper}>
                                            <input
                                                type="password"
                                                className={styles.field}
                                                placeholder={`${translateString('popup_field_password')} *`}
                                            />
                                        </div>
                                        <div className={styles.wrapper}>
                                            <input
                                                type="password"
                                                className={styles.field}
                                                placeholder={`${translateString('popup_field_confirm_password')} *`}
                                            />
                                        </div>
                                        <div className={styles.wrapper}>
                                            <input
                                                type="checkbox"
                                                id="privacy"
                                            />
                                            <label
                                                htmlFor="privacy"
                                                className={styles.label}
                                            >
                                                {translate('popup_privacy_message')}
                                                <NavLink
                                                    className={styles.link}
                                                    to="/privacy"
                                                >
                                                    {translate('popup_privacy')}
                                                </NavLink>
                                            </label>
                                        </div>
                                        <div className={styles.wrapper}>
                                            <input
                                                type="checkbox"
                                                id="terms"
                                            />
                                            <label
                                                htmlFor="terms"
                                                className={styles.label}
                                            >
                                                {translate('popup_terms_message')}
                                                <NavLink
                                                    className={styles.link}
                                                    to="/privacy"
                                                >
                                                    {translate('popup_terms')}
                                                </NavLink>
                                            </label>
                                        </div>
                                        <div className={styles.wrapper}>
                                            <button className={styles.button}>
                                                {translate('popup_button_3')}
                                            </button>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className={styles.wrapper}>
                                            <input
                                                type="text"
                                                className={styles.field}
                                                placeholder={`${translateString('popup_field_company_name')} *`}
                                            />
                                        </div>
                                        <div className={styles.wrapper}>
                                            <input
                                                type="text"
                                                className={styles.field}
                                                placeholder={`${translateString('popup_field_phone')} *`}
                                            />
                                        </div>
                                        <div className={styles.wrapper}>
                                            <input
                                                type="text"
                                                className={styles.field}
                                                placeholder={`${translateString('popup_field_website')} *`}
                                            />
                                        </div>
                                        <div className={styles.wrapper}>
                                            <input
                                                type="text"
                                                className={styles.field}
                                                placeholder={`${translateString('popup_field_country')} *`}
                                            />
                                        </div>
                                        <div className={styles.wrapper}>
                                            <input
                                                type="text"
                                                className={styles.field}
                                                placeholder={`${translateString('popup_field_city')} *`}
                                            />
                                        </div>
                                        <div className={styles.wrapper}>
                                            <input
                                                type="text"
                                                className={styles.field}
                                                placeholder={translateString('popup_field_address')}
                                            />
                                        </div>
                                        <div className={styles.wrapper}>
                                            <input
                                                type="email"
                                                className={styles.field}
                                                placeholder={`${translateString('popup_field_email')} *`}
                                            />
                                        </div>
                                        <div className={styles.wrapper}>
                                            <input
                                                type="password"
                                                className={styles.field}
                                                placeholder={`${translateString('popup_field_password')} *`}
                                            />
                                        </div>
                                        <div className={styles.wrapper}>
                                            <input
                                                type="password"
                                                className={styles.field}
                                                placeholder={`${translateString('popup_field_confirm_password')} *`}
                                            />
                                        </div>
                                        <div className={styles.wrapper}>
                                            <input
                                                type="checkbox"
                                                id="privacy"
                                            />
                                            <label
                                                htmlFor="privacy"
                                                className={styles.label}
                                            >
                                                {translate('popup_privacy_message')}
                                                <NavLink
                                                    className={styles.link}
                                                    to="/privacy"
                                                >
                                                    {translate('popup_privacy')}
                                                </NavLink>
                                            </label>
                                        </div>
                                        <div className={styles.wrapper}>
                                            <input
                                                type="checkbox"
                                                id="terms"
                                            />
                                            <label
                                                htmlFor="terms"
                                                className={styles.label}
                                            >
                                                {translate('popup_terms_message')}
                                                <NavLink
                                                    className={styles.link}
                                                    to="/privacy"
                                                >
                                                    {translate('popup_terms')}
                                                </NavLink>
                                            </label>
                                        </div>
                                        <div className={styles.wrapper}>
                                            <button className={styles.button}>
                                                {translate('popup_button_4')}
                                            </button>
                                        </div>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registration;
