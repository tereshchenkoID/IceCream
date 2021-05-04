import React from "react";
import classes from 'classnames';

import {translate, translateString} from "../../i18n/translate";

import Link from "../../Components/Link";
import Favourite from "../../Components/Favourite";

import styles from './index.module.scss';

const CompanyCard = ({ data, lang, categories, countries, isFavourite }) => {

    return (
        <div className={classes(styles.block, data && data.isPrime && styles.active)} data={translateString('card_prime')}>
            {
                data &&
                <div className={styles.wrapper}>

                    <div style={{position: 'relative'}}>
                        {
                            !isFavourite &&
                            <div className={styles.favourite}>
                                <Favourite id={data.id} />
                            </div>
                        }
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
                    </div>

                    <div className={styles.rate}>{data.rate.toFixed(1)}</div>


                    <div className={styles.wrap}>
                        <div className={styles.head}>
                            <div className={styles.name}>{data.name}</div>
                        </div>

                        <div className={styles.body}>
                            <div className={styles.skills}>
                                {
                                    data.skills.map((item, idx)=>
                                        <div key={idx} className={styles.skill}>
                                            <div>
                                                {
                                                    categories.find((e) => {
                                                        return e.id === item.id
                                                    }).title[lang]
                                                }
                                                {
                                                    item.services.map((s_item, s_idx) =>
                                                        <div key={s_idx} className={styles.subcategory}>
                                                            {
                                                                categories.find((e) => {return e.id === item.id}).subcategory &&
                                                                categories.find((e) => {return e.id === item.id}).subcategory.find((e) => {return e.id === s_item}).title[lang]
                                                            }
                                                        </div>
                                                    )
                                                }
                                            </div>
                                            <div>
                                                <div className={styles.label}>{translate('card_gender')}: </div>
                                                <div className={styles.genders}>
                                                    {
                                                        item.gender &&
                                                        item.gender.map((g_item, g_idx) =>
                                                            <div key={g_idx} style={{textTransform: 'capitalize'}}>
                                                                {g_item}
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                            <div>
                                                <div className={styles.label}>{translate('card_age')}: </div>
                                                <div className={styles.ages}>
                                                    {
                                                        item.age &&
                                                        item.age.map((a_item, a_idx) =>
                                                            <div key={a_idx} style={{textTransform: 'capitalize'}}>
                                                                {a_item}
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                            {
                                               item.country &&
                                               <div>
                                                   <div className={styles.label}>{translate('card_country')}: </div>
                                                   <div className={styles.countries}>
                                                       {
                                                           item.country &&
                                                           item.country.map((a_item, a_idx) =>
                                                               <div key={a_idx} style={{textTransform: 'capitalize'}}>
                                                                   <div className={styles.country}>
                                                                       <img
                                                                           src={`https://weplay-cdn.azureedge.net/weplay-public/flags/${a_item}.svg`}
                                                                           alt={data.country}
                                                                           className={styles.img}
                                                                       />
                                                                   </div>
                                                               </div>
                                                           )
                                                       }
                                                   </div>
                                               </div>
                                            }
                                        </div>
                                    )
                                }
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
                                    <div className={styles.label}>{translate('card_date')}: </div>
                                    <div>{data.date}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <div className={styles.link}>
                            <Link
                                url={`/create-offer/${data.id}`}
                                text={translate('card_button_send')}
                            />
                        </div>
                        <div className={styles.link}>
                            <Link
                                url={`/profile/${data.id}`}
                                text={translate('card_button_profile')}
                            />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default CompanyCard;
