import React from "react";

import getDate from "../../helpers/getDate";

import {translate} from "../../i18n/translate";

import styles from './index.module.scss';

const SortAvailable = ({available, setAvailable}) => {

    return (
        <div>
            <p>{translate('sort_from')}</p>
            <input
                type="date"
                min={getDate(0).toISOString().substring(0, 10)}
                max={getDate(24).toISOString().substring(0, 10)}
                className={styles.field}
                onChange={(e) => setAvailable({min: e.target.value, max: available.max})}
            />
            <p>{translate('sort_to')}</p>
            <input
                type="date"
                min={getDate(0).toISOString().substring(0, 10)}
                max={getDate(24).toISOString().substring(0, 10)}
                className={styles.field}
                onChange={(e) => setAvailable({min: available.min, max: e.target.value})}
            />
        </div>
    )
}

export default SortAvailable;
