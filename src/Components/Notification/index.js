import React from "react";

import classes from "classnames";

import styles from './index.module.scss';

const Notification = ({text, type}) => {

    return (
        <div className={classes(styles.block, styles[type])}>
            {text}
        </div>
    );
}

export default Notification;
