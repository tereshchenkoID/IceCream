import React from "react";

import styles from './index.module.scss';

const Subcategory = ({text}) => (
    <div className={styles.block}>
        {text}
    </div>
);

export default Subcategory;
