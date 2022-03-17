import React from "react";
import {useSelector} from "react-redux";

import styles from './index.module.scss';

const Account = () => {
    let { dataProfile } = useSelector(state => state.profileReducer);

    return (
        dataProfile &&
        <div className={styles.block}>
            <div className={styles.photo}>
                <img
                    src={dataProfile.photo ? `/img/profile/${dataProfile.photo}` : '/img/no-photo.webp'}
                    alt={'Profile'}
                    loading={'lazy'}
                />
            </div>
        </div>
    );
}

export default Account;
