import React from "react";

import Checkbox from "../../Components/Checkbox";

import styles from './index.module.scss';

const SortGender = ({gender, setGender}) => {

    return (
        <div>
            <div className={styles.item}>
                <Checkbox
                    id="male"
                    name="Male"
                    sort={gender}
                    setSort={setGender}
                />
            </div>
            <div className={styles.item}>
                <Checkbox
                    id="female"
                    name="Female"
                    sort={gender}
                    setSort={setGender}
                />
            </div>
        </div>
    )
}

export default SortGender;
