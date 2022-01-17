import React from "react";
import InputRange from 'react-input-range';

import styles from './index.module.scss';

const Range = ({data, action, max, min}) => {
    return (
        <div className={styles.block}>
            <InputRange
                maxValue={max}
                minValue={min}
                value={data}
                onChange={(value) => action({min: value.min, max: value.max})} />
        </div>
    );
}

export default Range;
