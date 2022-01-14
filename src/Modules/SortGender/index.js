import React from "react";

import Radio from "../../Components/Radio";

import styles from './index.module.scss';

const SortGender = ({setting, lang, gender, setGender}) => {
    return (
        <div>
            {
                setting &&
                setting.map((item, idx) =>
                    <div key={idx} className={styles.item}>
                        <Radio
                            lang={lang}
                            item={item}
                            name={'gender'}
                            date={gender}
                            action={setGender}
                        />
                    </div>
                )
            }
        </div>
    )
}

export default SortGender;
