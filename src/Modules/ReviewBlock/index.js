import React from "react";
import classes from 'classnames';

import styles from './index.module.scss';

const ReviewBlock = ({data}) => {
    return (
        <div className={styles.block}>
            <div className={styles.position}>{data.position}</div>
            <div className={styles.header}>
                <div className={styles.rate}>{data.rate.toFixed(1)}</div>
                <div className={styles.stars}>
                    {
                        Array.from(Array(data.rate), (e, i) =>
                            <div key={i} className={styles.star}>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.6019 5.02633L9.99069 4.365L7.92382 0.231497C7.76945 -0.0771657 7.23007 -0.0771657 7.0757 0.231497L5.00946 4.365L0.398217 5.02633C0.0194682 5.08091 -0.131781 5.51339 0.133843 5.76865L3.48383 8.99259L2.69196 13.5504C2.62884 13.9124 3.04071 14.1841 3.38133 14.0063L7.50007 11.8691L11.6188 14.0069C11.9563 14.1829 12.3719 13.9165 12.3082 13.5509L11.5163 8.99318L14.8663 5.76924C15.1319 5.51339 14.9801 5.08091 14.6019 5.02633Z" fill="#FFD500"/>
                                </svg>
                            </div>
                        )
                    }
                </div>
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

export default ReviewBlock;
