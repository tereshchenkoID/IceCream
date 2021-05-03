import React from "react";
import {translate, translateString} from "../../i18n/translate";

import styles from "./index.module.scss";
import classes from "classnames";

const Recovery = () => {
    return (
        <div className={styles.block}>
            <div className={classes("container-fluid", styles.fluid)}>
                <div className={classes("container", styles.container)}>
                    <div className={styles.form}>
                        <div className={styles.wrapper}>
                            <div className={styles.title}>{translate('popup_title_recovery')}</div>
                        </div>
                        <div className={styles.wrapper}>
                            <div className={styles.description}>{translate('popup_text_recovery')}</div>
                        </div>
                        <div className={styles.wrapper}>
                            <input
                                type="email"
                                className={styles.field}
                                placeholder={translateString('popup_field_email')}
                            />
                        </div>
                        <div className={styles.wrapper}>
                            <button className={styles.button}>
                                {translate('popup_button_2')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recovery;
