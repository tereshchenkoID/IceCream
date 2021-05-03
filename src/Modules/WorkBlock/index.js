import React from "react";
import classes from 'classnames';

import styles from './index.module.scss';

const WorkBlock = ({data}) => {
    return (
        <div className={styles.block}>
            <div className={styles.position}>{data.position}</div>
            <div className={styles.header}>
                {
                    data.company &&
                    <div className={styles.wrapper}>
                        <div className={classes(styles.icon, styles.organization)} />
                        <div className={styles.company}>{data.company}</div>
                    </div>
                }
                <div className={styles.wrapper}>
                    <div className={classes(styles.icon, styles.calendar)} />
                    {
                        data.period.map((item, idx) =>
                            <div key={idx} className={styles.date}>{item}</div>
                        )
                    }
                </div>
            </div>
            <div className={styles.description}>
                {data.description}
            </div>
        </div>
    )
}

export default WorkBlock;
