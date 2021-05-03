import React from "react";

import Range from "../../Components/Range";

import styles from './index.module.scss';

const SortAge = ({age, setAge}) => {
    return (
        <div className={styles.block}>
            <Range
                age={age}
                setAge={setAge}
            />
        </div>
    )
}

export default SortAge;
