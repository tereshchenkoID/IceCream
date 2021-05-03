import React from "react";

import Checkbox from "../../Components/Checkbox";

import styles from './index.module.scss';

const SortCountry = ({data, country, setCountry}) => {
    return (
        <div>
            {
                data.map((item, idx) =>
                    <div key={idx} className={styles.item}>
                        <Checkbox
                            id={item.code}
                            name={item.name}
                            sort={country}
                            setSort={setCountry}
                        />
                    </div>
                )
            }
        </div>
    )
}

export default SortCountry;
