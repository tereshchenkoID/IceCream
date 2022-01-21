import React, {useState} from "react";

import classes from "classnames";

import {translate} from "../../i18n/translate";

import styles from './index.module.scss';

const settings = [
    {
        id: 0,
        ru: "Не выбрано",
        ua: "Не вибрано",
        en: "Not chosen",
        de: "Nicht gewählt"
    },
    {
        id: 1,
        ru: "Дата регистрации",
        ua: "Дата реєстрації",
        en: "Date of registration",
        de: "Registrierungsdatum",
        list: [
            {
                id: 1,
                name: "↑"
            },
            {
                id: 2,
                name: "↓"
            }
        ]
    },
    {
        id: 2,
        ru: "Возраст",
        ua: "Вік",
        en: "Age",
        de: "Das Alter",
        list: [
            {
                id: 3,
                name: "↑"
            },
            {
                id: 4,
                name: "↓"
            }
        ]
    }
]

const Sort = ({lang, sort, setSort}) => {
    const [active, setActive] = useState(false)
    const [category, setCategory] = useState(sort);

    const handleButton = (parent, child) => {
        setCategory(parent)
        setSort(child)
        setActive(!active)
    }

    return (
        <div
            className={classes(styles.block, active && styles.active)}>
            <p className={styles.text}>{translate('title-sort-by')}:</p>
            <p
                className={styles.label}
                onClick={() => setActive(!active)}
            >
                <span>
                    {settings[category][lang]}
                </span>
                <span>
                    {
                        settings[category].list &&
                        settings[category].list.find((e) => {return e.id === sort}).name
                    }
                </span>
            </p>

            <div className={styles.dropdown}>
                {
                    settings.map((item, idx) =>
                        idx === 0 ?
                            <div
                                key={idx}
                                className={styles.item}
                                onClick={() => handleButton(item.id, 0)}
                            >
                                <p>{item[lang]}</p>
                            </div>
                        :

                            <div
                                key={idx}
                                className={styles.item}
                            >
                                <p>{item[lang]}</p>
                                {
                                    item.list &&
                                    <div className={styles.actions}>
                                        {
                                            item.list.map((i, e) =>
                                                <button
                                                    key={e}
                                                    className={classes(styles.button, sort === i.id && styles.active)}
                                                    onClick={() => handleButton(item.id, i.id)}
                                                >
                                                    {i.name}
                                                </button>
                                            )
                                        }
                                    </div>
                                }
                            </div>
                    )
                }
            </div>
        </div>
    )
}

export default Sort;
