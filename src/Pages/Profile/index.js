import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useSelector} from 'react-redux'
import {ReactTitle} from "react-meta-tags";

import classes from "classnames";

import {translate, translateString} from "../../i18n/translate";

import convertData from "../../helpers/convertData";
import getAge from "../../helpers/getAge";
import getAllStorage from "../../helpers/localStorage";

import Empty from "../../Components/Empty";
import Team from "../../Components/Team";
import Favourite from "../../Components/Favourite";
import Breadcrumbs from "../../Components/Breadcrumbs";

import styles from './index.module.scss';

const random = () => {
    const min = 0;
    const max = 7;

    return (Math.random() * (max - min) + min).toFixed(0);
}

const Profile = () => {
    let { id } = useParams();

    let { dataCard } = useSelector(state => state.cardReducer);
    let { dataSetting } = useSelector(state => state.settingReducer);

    const idx = random();
    const [lang] = useState(translateString('lang'));

    const [find, setFind] = useState({});
    const [teamArray, setTeamArray] = useState(getAllStorage('team'));
    const [favArray, setFavArray] = useState(getAllStorage('favourite'));

    const breadcrumbs = [
        {
            url: "/",
            text: translate("menu_link_1")
        },
        {
            text: translate("menu_link_5")
        }
    ]

    useEffect(() => {
        setFind(dataCard.find((e) => {return e.id === id}))
    }, [id, dataCard]);

    return (
        <main>
            <ReactTitle title={`Global Workers | ${translateString('menu_link_5')}`} />
            <section className={classes("section", "alt")}>
                <div className="container-fluid">
                    <div className="container">
                        <Breadcrumbs data={breadcrumbs}/>
                    </div>
                </div>
            </section>
            {
                find &&
                Object.keys(find).length !== 0
                ?
                    <>
                        <section className={styles.header}>
                            <div className={styles.picture}>
                                <picture>
                                    <source media="(max-width: 576px)" srcSet={`/img/service/576/1x/${idx}.webp 1x, /img/service/576/2x/${idx}@2x.webp 2x`}/>
                                    <source media="(max-width: 768px)" srcSet={`/img/service/768/1x/${idx}.webp 1x, /img/service/768/2x/${idx}@2x.webp 2x`}/>
                                    <source media="(max-width: 992px)" srcSet={`/img/service/992/1x/${idx}.webp 1x, /img/service/992/2x/${idx}@2x.webp 2x`}/>
                                    <source media="(max-width: 1200px)" srcSet={`/img/service/1200/1x/${idx}.webp 1x, /img/service/1200/2x/${idx}@2x.webp 2x`}/>
                                    <source media="(max-width: 1600px)" srcSet={`/img/service/1600/1x/${idx}.webp 1x, /img/service/1600/2x/${idx}@2x.webp 2x`}/>
                                    <source media="(min-width: 2048px)" srcSet={`/img/service/2048/1x/${idx}.webp 1x, /img/service/2048/2x/${idx}@2x.webp 2x`}/>
                                    <img src={`/img/service/1600/1x/${idx}.webp`} alt={`Profile ${idx}`} />
                                </picture>
                            </div>
                            <div className="container-fluid">
                                <div className="container">
                                    <div className={styles.card}>
                                        <div>
                                            <div className={styles.favourite}>
                                                <Favourite
                                                    id={id}
                                                    favArray={favArray}
                                                    setFavArray={setFavArray}
                                                />
                                            </div>
                                            <div className={styles.photo}>
                                               <img
                                                   src={find.photo}
                                                   alt={find.photo}
                                                   loading={'lazy'}
                                               />
                                            </div>
                                        </div>

                                        <div>
                                            <div className={styles.wrap}>
                                                <div className={styles.name}>{find.name} {find.surname}</div>
                                            </div>
                                            <div className={styles.wrap}>
                                                <div className={styles.column}>
                                                    <p className={styles.label}>{translate('card_available')}: </p>
                                                    <p className={styles.text}>{convertData(find.available[0])} - {convertData(find.available[1])}</p>
                                                </div>
                                                <div className={styles.column}>
                                                    <p className={styles.label}>{translate('card_date')}:</p>
                                                    <p className={styles.text}>{convertData(find.date)}</p>
                                                </div>
                                            </div>

                                            <div className={styles.wrap}>
                                                <div className={styles.button}>
                                                    <Team
                                                        id={find.id}
                                                        teamArray={teamArray}
                                                        setTeamArray={setTeamArray}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="section">
                            <div className="container-fluid">
                                <div className="container">
                                    <div className={styles.wrapper}>
                                        <div className={styles.title}>{translate('section_description_general')}:</div>
                                        <div className={styles.body}>
                                            <div className={styles.row}>
                                                <p className={styles.cell}>{translate('sort_title_age')}</p>
                                                <strong className={styles.cell}>{getAge(find.age)}</strong>
                                            </div>
                                            <div className={styles.row}>
                                                <p className={styles.cell}>{translate('sort_title_gender')}</p>
                                                <strong className={styles.cell}>{dataSetting.gender[find.gender][lang]}</strong>
                                            </div>
                                            <div className={styles.row}>
                                                <p className={styles.cell}>{translate('sort_title_vaccination')}</p>
                                                <strong className={styles.cell}>{dataSetting.vaccination[find.vaccinated][lang]}</strong>
                                            </div>
                                            <div className={styles.row}>
                                                <p className={styles.cell}>{translate('sort_title_access')}</p>
                                                <strong className={styles.cell}>{dataSetting.access[find.eu_allowed_person][lang]}</strong>
                                            </div>
                                            {
                                                find.family &&
                                                <div className={styles.row}>
                                                    <p className={styles.cell}>{translate('sort_title_family')}</p>
                                                    <strong className={styles.cell}>{dataSetting.family[find.family][lang]}</strong>
                                                </div>
                                            }
                                            {
                                                find.weight !== '0' &&
                                                <div className={styles.row}>
                                                    <p className={styles.cell}>{translate('sort_title_weight')}</p>
                                                    <strong className={styles.cell}>{find.weight} kg</strong>
                                                </div>
                                            }
                                            {
                                                find.height !== '0' &&
                                                <div className={styles.row}>
                                                    <p className={styles.cell}>{translate('sort_title_height')}</p>
                                                    <strong className={styles.cell}>{find.height} cm</strong>
                                                </div>
                                            }
                                        </div>
                                    </div>

                                    <div className={styles.wrapper}>
                                        <div className={styles.title}>{translate('section_description_skills')}:</div>
                                        <div className={styles.body}>
                                            {
                                                find.skills &&
                                                find.skills.map((category, idx) =>
                                                    <div key={idx} className={styles.skill}>
                                                        <p className={styles.category}>{dataSetting.job[category.id][lang]}:</p>
                                                        <div className={styles.list}>
                                                        {
                                                            category.list.map((subcategory, idx) =>
                                                                <p key={idx} className={styles.item}>{dataSetting.job[category.id].list[subcategory][lang]}</p>
                                                            )
                                                        }
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>

                                    {
                                        find.language &&
                                        <div className={styles.wrapper}>
                                            <div className={styles.title}>{translate('section_description_language')}:</div>
                                            <div className={styles.body}>
                                                <div className={styles.list}>
                                                    {
                                                        find.language &&
                                                        find.language.map((item, idx) =>
                                                            <div key={idx} className={styles.item}>
                                                                {dataSetting.language.list[item.lang][lang]} ({dataSetting.language.level[item.level][lang]})
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    }

                                    {
                                        find.driver_license &&
                                        <div className={styles.wrapper}>
                                            <div className={styles.title}>{translate('section_description_driver')}:</div>
                                            <div className={styles.body}>
                                                <div className={styles.list}>
                                                    {
                                                        find.driver_license.map((item, idx) =>
                                                            <div key={idx} className={styles.item}>
                                                                {dataSetting.driver[item].name}
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    }

                                    {
                                        find.hobbies &&
                                        <div className={styles.wrapper}>
                                            <div className={styles.title}>{translate('section_description_about')}:</div>
                                            <div className={styles.body}>
                                                <div className={styles.list}>
                                                    {
                                                        find.hobbies.map((item, idx) =>
                                                            <div key={idx} className={styles.item}>
                                                                <div>{dataSetting.about[item][lang]}</div>
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </section>
                    </>
                :
                    <section className="section">
                        <div className="container-fluid">
                            <div className="container">
                                <Empty />
                            </div>
                        </div>
                    </section>
            }
        </main>
    );
}

export default Profile;
