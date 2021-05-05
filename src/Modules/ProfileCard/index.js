import React from "react";
import classes from 'classnames';

import {translate, translateString} from "../../i18n/translate";

import Link from "../../Components/Link";
import Favourite from "../../Components/Favourite";

import styles from './index.module.scss';

const ProfileCard = ({ data, lang, categories, countries, isFavourite, isTeam }) => {

    return (
        <div className={classes(styles.block, data && data.isPrime && styles.active)}>
            {
                data &&
                <div className={styles.wrapper} >

                    <div className={styles.top}>
                        <div className={styles.photo}>
                            {
                                data.photo &&
                                <img
                                    src={data.photo}
                                    alt={data.photo}
                                    className={styles.img}
                                />
                            }
                        </div>
                        {
                            !isFavourite &&
                            <div className={styles.favourite}>
                                <Favourite id={data.id} />
                            </div>
                        }
                    </div>
                    {
                        data.rate &&
                        <div className={styles.rate}>{data.rate.toFixed(1)}</div>
                    }
                    <div className={styles.content} data={translateString('card_prime')}>

                        <div className={styles.wrap}>
                            <div className={styles.head}>
                                <div className={styles.name}>{data.surname} {data.name}</div>
                                <div className={styles.country}>
                                    <img
                                        src={`https://weplay-cdn.azureedge.net/weplay-public/flags/${data.country}.svg`}
                                        alt={data.country}
                                        className={styles.img}
                                    />
                                </div>
                            </div>

                            <div className={styles.body}>
                                <div className={styles.skills}>

                                    {
                                        data.skills.map((item, idx)=>
                                            <div key={idx} className={styles.skill}>
                                                {
                                                    categories.find((e) => {
                                                        return e.id === item.id
                                                    }).title[lang]
                                                }
                                            </div>
                                        )
                                    }
                                </div>
                                <div>
                                    {
                                        !isTeam &&
                                        <button className={styles.button}>
                                            <Link
                                                url={`/create-offer/${data.id}`}
                                                text={translate('card_button_send')}
                                            />
                                        </button>
                                    }
                                    <div className={styles.money}>
                                        <span>$</span>
                                        <strong>{data.wage.toFixed(2)}</strong>
                                        <span>p/h</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.footer}>
                                <div className={styles.info}>
                                    <div>
                                        <div className={styles.label}>{translate('card_country')}: </div>
                                        <div>
                                            {
                                                countries.find((e) => {
                                                    return e.code.toLowerCase() === data.country
                                                }).name
                                            }
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.label}>{translate('card_gender')}: </div>
                                        <div
                                            style={{textTransform: 'capitalize'}}
                                        >
                                            {data.gender}
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.label}>{translate('card_age')}: </div>
                                        <div>{data.age}</div>
                                    </div>
                                    <div>
                                        <div className={styles.label}>{translate('card_date')}: </div>
                                        <div>{data.date}</div>
                                    </div>
                                </div>
                                <div className={styles.link}>
                                    <Link
                                        url={`/profile/${data.id}`}
                                        text={translate('card_button_profile')}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            }
        </div>
    )
}

export default ProfileCard;
