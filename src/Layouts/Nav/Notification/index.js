import React from "react";
import {NavLink} from "react-router-dom";

import { translate } from "../../../i18n/translate";

import styles from './index.module.scss';

const Notification = ({ setNotification }) => {
    return (
        <div className={styles.block}>
            <NavLink
                className={styles.link}
                to="/notification/1"
                onClick={() => setNotification(false)}
            >
                <div className={styles.logo} />
                <div className={styles.wrap}>
                    <div className={styles.name}>Haris Sohel</div>
                    <div className={styles.date}>20.04.2021</div>
                </div>
            </NavLink>
            <NavLink
                className={styles.link}
                to="/notification/2"
                onClick={() => setNotification(false)}
            >
                <div className={styles.logo} />
                <div className={styles.wrap}>
                    <div className={styles.name}>Haris Sohel</div>
                    <div className={styles.date}>20.04.2021</div>
                </div>
            </NavLink>
            <NavLink
                className={styles.all}
                to="/notification"
                onClick={() => setNotification(false)}
            >
                {translate('notification_popup_button')}
            </NavLink>
        </div>
    );
}

export default Notification;
