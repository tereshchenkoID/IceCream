import React from "react";
import classes from "classnames";

import styles from './index.module.scss';

const Toggle = ({item, date, action}) => {
    return (
        <div className={styles.block}>
            <div
                className={classes(styles.item, date && styles.active)}
                onClick={(e) => action(!date)}
            >
                <div className={styles.slide} />
            </div>
            {
                item &&
                <div className={styles.label}>{item}</div>
            }
        </div>
    );
}

export default Toggle;
