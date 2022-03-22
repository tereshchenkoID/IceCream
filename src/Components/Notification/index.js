import React from "react";

import classes from "classnames";

import {translate} from "../../i18n/translate";

import styles from './index.module.scss';

const Notification = ({date}) => {

    return (
        date.code !== 0 &&
        <div className={classes(styles.block, styles[date.type])}>
            {translate(`${date.type}-${date.code}`)}
        </div>
    );
}

export default Notification;
