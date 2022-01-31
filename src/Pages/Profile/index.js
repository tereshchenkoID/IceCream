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
                                                {
                                                    find.photo ?
                                                        <img
                                                            src={find.photo}
                                                            alt={find.photo}
                                                            loading={'lazy'}
                                                        />
                                                        :
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M15.0778418,12.9406987 L18.5345074,14.5119103 C19.4269931,14.9175857 20,15.8074678 20,16.7878265 L20,17.5 C20,18.8807119 18.8807119,20 17.5,20 L6.5,20 C5.11928813,20 4,18.8807119 4,17.5 L4,16.7878265 C4,15.8074678 4.57300693,14.9175857 5.46549264,14.5119103 L8.92215823,12.9406987 C7.75209123,12.0255364 7,10.6005984 7,9 C7,6.23857625 9.23857625,4 12,4 C14.7614237,4 17,6.23857625 17,9 C17,10.6005984 16.2479088,12.0255364 15.0778418,12.9406987 L15.0778418,12.9406987 Z M9.96126583,13.5668358 L5.87929558,15.4222768 C5.34380416,15.665682 5,16.1996113 5,16.7878265 L5,17.5 C5,18.3284271 5.67157288,19 6.5,19 L17.5,19 C18.3284271,19 19,18.3284271 19,17.5 L19,16.7878265 C19,16.1996113 18.6561958,15.665682 18.1207044,15.4222768 L14.0387342,13.5668358 C13.4161054,13.8452135 12.7261289,14 12,14 C11.2738711,14 10.5838946,13.8452135 9.96126583,13.5668358 L9.96126583,13.5668358 Z M12,13 C14.209139,13 16,11.209139 16,9 C16,6.790861 14.209139,5 12,5 C9.790861,5 8,6.790861 8,9 C8,11.209139 9.790861,13 12,13 Z"/>
                                                        </svg>
                                                }
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
