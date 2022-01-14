import React from "react";

import styles from './index.module.scss';

const Preloader = () => {

    return (
        <div className={styles.block}>
            <div className={styles.wrapper}>
                {
                    Array(16).fill(null).map((item, idx) =>
                        <div key={idx} className={styles.item} />
                    )
                }
            </div>
        </div>
    );
}

export default Preloader;
