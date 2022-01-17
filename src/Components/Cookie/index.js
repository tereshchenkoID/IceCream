import React from "react";

import styles from './index.module.scss';

const hide = (action) => {
    localStorage.setItem('cookie', '1')
    action(false)
}

const Cookie = ({setCookie}) => {

    return (
        <div className={styles.block}>
            <p className={styles.text}>Мы используем куки-файлы, чтобы обеспечить вам наилучшие впечатления на нашем сайте. Продолжая использовать наш сайт, вы автоматически соглашаетесь с использованием данных технологий.</p>
            <button
                className={styles.button}
                onClick={() => hide(setCookie)}
            >
                Согласиться
            </button>
        </div>
    );
}

export default Cookie;
