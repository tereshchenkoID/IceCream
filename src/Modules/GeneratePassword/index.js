import React, {useState} from "react";

import styles from './index.module.scss';

import {translate} from "../../i18n/translate";

const generate = () =>{
    return Math.random().toString(20).substring(2, 30);
}

const GeneratePassword = () => {
    const [password, setPassword] = useState('');

    return (
        <div>
            <button
                type={"button"}
                onClick={() => {
                    setPassword(generate())
                }}
                className={styles.button}
            >
                {translate('profile_button_generate_password')}
            </button>
            {
                password &&
                <div className={styles.password}>{password}</div>
            }
        </div>
    )
}

export default GeneratePassword;
