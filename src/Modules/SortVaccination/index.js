import React from "react";

import Radio from "../../Components/Radio";

import styles from './index.module.scss';

const SortVaccination = ({setting, lang, vaccination, setVaccination}) => {
    return (
        <div>
            {
                setting &&
                setting.map((item, idx) =>
                    <div key={idx} className={styles.item}>
                        <Radio
                            lang={lang}
                            item={item}
                            name={'vaccination'}
                            date={vaccination}
                            action={setVaccination}
                        />
                    </div>
                )
            }
        </div>
    )
}

export default SortVaccination;
