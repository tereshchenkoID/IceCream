import React from "react";

import Link from "../Link";

import styles from './index.module.scss';

const Title = ({text, url, link}) => {

    return (
        <div className={styles.block}>
            <div className={styles.text}>
                {text}
            </div>
            {
                url &&
                link &&
                    <div className={styles.link}>
                        <Link
                            url={url}
                            text={link}
                        />
                    </div>
            }
        </div>
    );
}

export default Title;
