import React from "react";
import classNames from "classnames";

import styles from './index.module.scss';

import Button from "../../../../Components/Button";

const Card = ({
        url,
        title,
        percent,
        total
    }) => {
    return (
        <div className={classNames('gradient-background', styles.block)}>
            <div className={styles.wrapper}>
                <div className={styles.top}>
                   <div className={styles.picture}>
                       {
                           url &&
                           <img
                               src={url}
                               alt={title}
                               loading={'lazy'}
                           />
                       }
                   </div>
                    <div>
                        <h6 className={styles.title}>{title}</h6>
                        <p className={styles.percent}>{percent}%</p>
                    </div>
                </div>
                <div className={styles.center}>
                    <div className={styles.item}>
                        <p className={styles.label}>Daily ROI</p>
                        <p className={styles.value}>3.53%</p>
                    </div>
                    <div className={styles.item}>
                        <p className={styles.label}>Earn</p>
                        <p className={styles.value}>STRAW</p>
                    </div>
                    <div className={styles.item}>
                        <p className={styles.label}>Pending Rewards</p>
                        <p className={styles.value}>0.0000</p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.button}>
                            <Button
                                type={'link'}
                                placeholder={'Aprove'}
                                classname={'primary'}
                                action={null}
                            />
                        </div>
                    </div>
                    <div className={classNames(styles.item, styles.wide)}>
                        <p className={styles.label}> = $0.00</p>
                    </div>
                    <div className={styles.item}>
                        <p className={styles.label}>FUDGE-DAI LP</p>
                        <p className={styles.value}>Staked</p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.button}>
                            <Button
                                type={'link'}
                                placeholder={'Aprove'}
                                classname={'primary'}
                                action={null}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p className={styles.locked}>Total Value Locked:</p>
                    <h5 className={styles.total}>{total}</h5>
                </div>
            </div>
        </div>
    );
}

export default Card;
