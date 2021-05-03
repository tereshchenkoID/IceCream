import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import classes from "classnames";

import { loadCardData } from '../../redux/actions/cardActions';
import {loadCompanyData} from "../../redux/actions/companyActions";

import {translate, translateString} from "../../i18n/translate";

import WorkBlock from "../../Modules/WorkBlock";
import ReviewBlock from "../../Modules/ReviewBlock";
import Subcategory from "../../Components/Subcategory";
import Favourite from "../../Components/Favourite";
import Breadcrumbs from "../../Components/Breadcrumbs";

import styles from './index.module.scss';

const Profile = () => {
    const dispatch = useDispatch();

    let { id } = useParams();
    let { dataUser } = useSelector(state => state.userReducer);
    let { dataCountry } = useSelector( state => state.countryReducer);
    let { dataCategory } = useSelector(state => state.categoryReducer);

    let { dataCard } = useSelector(state => state.cardReducer);
    let { dataCompany } = useSelector(state => state.companyReducer);

    const titles = {
        about: `${translateString('section_description_about')}:`,
        skills: `${translateString('section_description_skills')}:`,
        works: `${translateString('section_description_work')}:`,
        reviews: `${translateString('section_description_review')}:`,
    };

    const [lang] = useState(translateString('lang'));
    const [prime] = useState(translateString('card_prime'));
    const [find, setFind] = useState();

    const breadcrumbs = [
        {
            url: "/main",
            text: translate("menu_link_1")
        },
        {
            text: 'Profile'
        }
    ]

    useEffect(() => {
        dataUser.role === 1 && dispatch(loadCompanyData());
        dataUser.role === 2 && dispatch(loadCardData());

        dataUser.role === 1 && setFind(dataCompany && dataCompany.find((e) => {return e.id === id}))
        dataUser.role === 2 && setFind(dataCard && dataCard.find((e) => {return e.id === id}))
    }, [dataCard, dataCompany]);

    return (
        <div className={styles.block}>
            <div className={styles.header} style={{backgroundImage: 'url(/img/header-2.jpeg)'}}>
                <div className={classes("container-fluid", styles.fluid)}>
                    <div className={classes("container", styles.container)}>
                        {
                            find &&
                            <div className={classes(styles.card, find.isPrime && styles.active)}>
                                <div className={styles.head} data={prime}>
                                    <div className={styles.favourite}>
                                        <Favourite id={find.id}/>
                                    </div>
                                    <div className={styles.photo}>
                                        {
                                            find.photo &&
                                            <img
                                                src={find.photo}
                                                alt={find.photo}
                                                className={styles.img}
                                            />
                                        }
                                    </div>
                                </div>

                                <div>
                                    <div className={styles.wrap}>
                                        <div className={styles.name}>
                                            {find.name} {find.surname && find.surname}
                                        </div>
                                    </div>

                                    <div className={styles.wrap}>
                                        <div className={styles.country}>
                                            <img
                                                src={`https://weplay-cdn.azureedge.net/weplay-public/flags/${find.country}.svg`}
                                                alt={find.country}
                                                className={styles.img}
                                            />
                                        </div>
                                        {
                                            find.rate &&
                                            <div className={styles.rate}>{find.rate.toFixed(1)}</div>
                                        }
                                    </div>

                                    <div className={styles.wrap}>
                                        <div className={styles.column}>
                                            <div className={styles.label}>{translate('card_country')}:</div>
                                            <div className={styles.text}>
                                                {
                                                    dataCountry.find((e) => {
                                                        return e.code.toLowerCase() === find.country
                                                    }).name
                                                }
                                            </div>
                                        </div>
                                        {
                                            find.gender &&
                                            <div className={styles.column}>
                                                <div className={styles.label}>{translate('card_gender')}:</div>
                                                <div className={styles.text}>{find.gender}</div>
                                            </div>
                                        }
                                        {
                                            find.age &&
                                            <div className={styles.column}>
                                                <div className={styles.label}>{translate('card_age')}:</div>
                                                <div className={styles.text}>{find.age}</div>
                                            </div>
                                        }
                                        <div className={styles.column}>
                                            <div className={styles.label}>{translate('card_date')}:</div>
                                            <div className={styles.text}>{find.date}</div>
                                        </div>
                                    </div>

                                    <div className={styles.wrap}>
                                        <button
                                            className={classes(styles.button, styles.primary)}
                                        >
                                            {translate('card_button_send')}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>

            <div className={classes("container-fluid", styles.fluid)}>
                <div className={classes("container", styles.container)}>
                    <Breadcrumbs data={breadcrumbs}/>
                    <div className={styles.wrapper}>
                        <div className={styles.left}>
                            {
                                find &&
                                <>
                                    {
                                        find.about &&
                                        <div className={styles.section}>
                                            <Subcategory text={titles.about}/>
                                            <div className={styles.description}>
                                                <div className={styles.about}>{find.about}</div>
                                            </div>
                                        </div>
                                    }
                                    <div className={styles.section}>
                                        <Subcategory text={titles.skills}/>
                                        <div className={styles.description}>
                                            {
                                                dataUser.role === 1 &&
                                                find.skills.map((item, idx)=>
                                                    <div key={idx} className={styles.skill}>
                                                        <div>
                                                            <div className={styles.category}>
                                                                {
                                                                    dataCategory.find((e) => {
                                                                        return e.id === item.id
                                                                    }).title[lang]
                                                                }
                                                            </div>
                                                            {
                                                                item.services.map((s_item, s_idx) =>
                                                                    <div key={s_idx} className={styles.subcategory}>
                                                                        {
                                                                            dataCategory.find((e) => {return e.id === item.id}).subcategory &&
                                                                            dataCategory.find((e) => {return e.id === item.id}).subcategory.find((e) => {return e.id === s_item}).title[lang]
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
                                            {
                                                dataUser.role === 2 &&
                                                find.skills.map((sk_item, sk_idx) =>
                                                    <div key={sk_idx} className={styles.item}>
                                                        <div className={styles.category}>{dataCategory.find((e) => {return e.id === sk_item.id}).title[lang]}</div>
                                                        {
                                                            sk_item.services &&
                                                            sk_item.services.map((s_item, s_idx) =>
                                                                <div key={s_idx} className={styles.subcategory}>
                                                                    {
                                                                        dataCategory.find((e) => {return e.id === sk_item.id}).subcategory &&
                                                                        dataCategory.find((e) => {return e.id === sk_item.id}).subcategory.find((a) => {return a.id === s_item}).title[lang]
                                                                    }
                                                                </div>
                                                            )
                                                        }
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                    {
                                        find.works &&
                                        <div className={styles.section}>
                                            <Subcategory text={titles.works}/>
                                            <div className={styles.description}>
                                                {
                                                    find.works.length > 0
                                                        ?
                                                        (
                                                            find.reviews.map((item, idx) =>
                                                                <div key={idx} className={styles.works}>
                                                                    <WorkBlock data={item}/>
                                                                </div>
                                                            )
                                                        )
                                                        :
                                                        <div>Not working yet</div>
                                                }
                                            </div>
                                        </div>
                                    }
                                    <div className={styles.section}>
                                        <Subcategory text={titles.reviews}/>
                                        <div className={styles.description}>
                                            {
                                                find.reviews.length > 0
                                                    ?
                                                    (
                                                        find.reviews.map((item, idx) =>
                                                            <div key={idx} className={styles.review}>
                                                                <ReviewBlock data={item}/>
                                                            </div>
                                                        )
                                                    )
                                                    :
                                                    <div>No reviews</div>
                                            }
                                        </div>
                                    </div>
                                </>
                            }
                        </div>
                        <div className={styles.right}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
