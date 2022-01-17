import React from "react";

import Checkbox from "../../Components/Checkbox";

import styles from './index.module.scss';

const SortDriver = ({setting, driver, setDriver}) => {

    return (
        <div>
            {
                setting &&
                setting.map((item, idx) =>
                    <div key={idx} className={styles.item}>
                        <Checkbox
                            item={item}
                            label={item.name}
                            name={'driver'}
                            date={driver}
                            action={setDriver}
                        />
                    </div>
                )
            }
        </div>
    )
}

export default SortDriver;
