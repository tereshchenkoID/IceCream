import React from "react";

import Radio from "../../Components/Radio";

import styles from './index.module.scss';

const SortFamily = ({setting, lang, family, setFamily}) => {
    return (
        <div>
            {
                setting &&
                setting.map((item, idx) =>
                    <div key={idx} className={styles.item}>
                        <Radio
                            lang={lang}
                            item={item}
                            name={'family'}
                            date={family}
                            action={setFamily}
                        />
                    </div>
                )
            }
        </div>
    )
}

export default SortFamily;
