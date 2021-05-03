import React from "react";
import InputRange from 'react-input-range';

import 'react-input-range/lib/css/index.css';

import styles from './index.module.scss';

const Range = ({age, setAge}) => {
    return (
        <div className={styles.block}>
            <InputRange
                maxValue={100}
                minValue={0}
                value={age}
                onChange={(value) => setAge({min: value.min, max: value.max})} />
        </div>
    );
}

export default Range;
