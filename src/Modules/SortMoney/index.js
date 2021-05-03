import React from "react";

import {translateString} from "../../i18n/translate";

import styles from './index.module.scss';

const SortMoney = ({wage, setWage}) => {
    return (
        <div className={styles.block}>
            <div className={styles.wrap}>
                <input
                    type="number"
                    placeholder={translateString('sort_from')}
                    className={styles.field}
                    value={wage.min}
                    onChange={(e) => {
                        setWage({min: e.target.value, max: wage.max})
                    }}
                />
            </div>
            <div className={styles.wrap}>
                <input
                    type="number"
                    placeholder={translateString('sort_to')}
                    className={styles.field}
                    value={wage.max}
                    onChange={(e) => {
                        setWage({min: wage.min, max: e.target.value})
                    }}
                />
            </div>
        </div>
    )
}

export default SortMoney;
