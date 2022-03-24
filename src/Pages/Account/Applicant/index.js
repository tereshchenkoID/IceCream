import React, {useEffect, useState} from "react";
import {ReactTitle} from "react-meta-tags";
import {useDispatch, useSelector} from "react-redux";

import classes from "classnames";

import {loadProfileData} from "../../../redux/actions/profileActions";

import request from "../_helpers/request";
import checkForm from "../../../helpers/checkForm";

import {translate, translateString} from "../../../i18n/translate";

import Button from "../../../Components/Button";
import Radio from "../../../Components/Radio";
import Preloader from "../../../Components/Preloader";
import Breadcrumbs from "../../../Components/Breadcrumbs";
import Notification from "../../../Components/Notification";

import styles from './index.module.scss';

const Applicant = () => {
    const dispatch = useDispatch();

    let { dataProfile } = useSelector(state => state.profileReducer);
    let { dataSetting } = useSelector(state => state.settingReducer);

    const [lang] = useState(translateString('lang'));

    const breadcrumbs = [
        {
            url: "/",
            text: translate("menu_link_1")
        },
        {
            text: translate("menu_link_12")
        }
    ]

    const [loader, setLoader] = useState(false);
    const [access, setAccess] = useState();
    const [vaccination, setVaccination] = useState();
    const [available, setAvailable] = useState({
        min: '',
        max: ''
    });

    const [language, setLanguage] = useState([]);
    const [skills, setSkills] = useState([]);

    const [notification, setNotification] = useState({
        type: null,
        code: 0
    })

    const updateProfile = () => {
        setTimeout(() => {
            dispatch(loadProfileData())
        }, 2000);
    }

    const handleLanguage = (data) => {
        const a = [...language]
        const find_c = a.find((e) => {
            return e.lang === data.lang.toString()
        })

        if (find_c) {
            const find_i = a.find((e) => {
                return e.lang === data.lang.toString() && e.level === data.level.toString()
            })

            if (find_i) {
                a.splice(a.indexOf(find_c), 1)
            }
            else {
                a.splice(a.indexOf(find_c), 1, data)
            }
        }
        else {
            a.push(data)
        }

        setLanguage(a)

        const formData = new FormData();

        formData.set('type', '8')
        formData.set('language', JSON.stringify(a))

        request(formData, setLoader, false)

        updateProfile()
    }

    const handleSkill = (c_id, i_id) => {
        const a = [...skills]

        const find_c = a.find((e) => {
            return e.id === c_id.toString()
        })

        if (find_c) {
            const find_i = find_c.list.find((e) => {
                return e === i_id.toString()
            })

            if (find_i) {
                find_c.list.splice(find_c.list.indexOf(find_i.toString()), 1)
            }
            else {
                find_c.list.push(i_id.toString())
            }
        }
        else {
            a.push({
                id: c_id,
                list: [
                    i_id
                ]
            })
        }

        setSkills(a)

        const formData = new FormData();

        formData.set('type', '9')
        formData.set('skills', JSON.stringify(a))

        request(formData, setLoader, false)

        updateProfile()
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const c_Form = checkForm([access, vaccination, available.min, available.max])

        if (c_Form.code === 0) {
            setLoader(true)

            setNotification({
                type: null,
                code: 0
            })

            const formData = new FormData(e.target);

            formData.set('type', '2')
            formData.set('access', access)
            formData.set('vaccination', vaccination)
            formData.set('available_from', available.min)
            formData.set('available_to', available.max)

            request(formData, setLoader, true)

            updateProfile()
        }
        else {
            setNotification(c_Form)
        }
    }

    useEffect(() => {
        dataProfile &&
            setAccess(dataProfile.eu_allowed_person)
            setVaccination(dataProfile.vaccinated)
            setLanguage(dataProfile.language || [])
            setSkills(dataProfile.skills || [])
            setAvailable({
                min: dataProfile.available[0] || '',
                max: dataProfile.available[1] || '',
            })
    }, [dataProfile]);

    return (
        <main>
            <ReactTitle title={`Global Workers | ${translateString('menu_link_12')}`} />
            <section className={classes("section", "alt")}>
                <div className="container-fluid">
                    <div className="container">
                        <Breadcrumbs data={breadcrumbs}/>
                    </div>
                </div>
            </section>
            <section className={classes("section", "fluid")}>
                <div className="container-fluid">
                    <div className="container">
                        <Notification date={notification} />
                        <form
                            className={classes(
                                styles.form,
                                loader && styles.disabled
                            )}
                            onSubmit={handleSubmit}
                        >
                            {
                                loader &&
                                <div className={styles.loader}>
                                    <Preloader />
                                </div>
                            }
                            <div className={styles.wrapper}>
                                <div className={styles.head}>
                                    <div className={styles.title}>{translate('section_description_work')}:</div>
                                </div>
                                <div className={styles.body}>
                                    <p className={styles.label}>{translate('profile_available')} <span>*</span></p>
                                    <div className="row">
                                        <div className={classes("col", "col-12", "col-lg-6", "col-padding-vertical")}>
                                            <p className={styles.label}>{translate('sort_from')}: </p>
                                            <input
                                                type={"date"}
                                                className={styles.field}
                                                value={available.min}
                                                onChange={(e) => setAvailable({
                                                    min: e.target.value,
                                                    max: available.max
                                                })}
                                                required={true}
                                            />
                                        </div>
                                        <div className={classes("col", "col-12", "col-lg-6", "col-padding-vertical")}>
                                            <p className={styles.label}>{translate('sort_to')}: </p>
                                            <input
                                                type={"date"}
                                                className={styles.field}
                                                value={available.max}
                                                onChange={(e) => setAvailable({
                                                    min: available.min,
                                                    max: e.target.value
                                                })}
                                                required={true}
                                            />
                                        </div>
                                        <div className={classes("col", "col-12", "col-lg-6", "col-padding-vertical")}>
                                            <p className={styles.label}>{translate('profile_vaccination')} <span>*</span></p>
                                            {
                                                dataSetting.vaccination.slice(1, dataSetting.length).map((item, idx) =>
                                                    <div
                                                        key={idx}
                                                        className={styles.block}
                                                    >
                                                        <Radio
                                                            lang={lang}
                                                            item={item}
                                                            name={'vaccination'}
                                                            date={vaccination}
                                                            action={setVaccination}
                                                            required={true}
                                                        />
                                                    </div>
                                                )
                                            }
                                        </div>
                                        <div className={classes("col", "col-12", "col-lg-6", "col-padding-vertical")}>
                                            <p className={styles.label}>{translate('profile_access')} <span>*</span></p>
                                            {
                                                dataSetting.access.slice(1, dataSetting.length).map((item, idx) =>
                                                    <div
                                                        key={idx}
                                                        className={styles.block}
                                                    >
                                                        <Radio
                                                            lang={lang}
                                                            item={item}
                                                            name={'access'}
                                                            date={access}
                                                            action={setAccess}
                                                            required={true}
                                                        />
                                                    </div>
                                                )
                                            }
                                        </div>
                                        <div className={classes("col", "col-12", "col-padding-vertical")}>
                                            <Button
                                                type={"submit"}
                                                placeholder={translate('profile_button_save_settings')}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div className={styles.wrapper}>
                            <div className={styles.head}>
                                <div className={styles.title}>{translate('section_description_language')}:</div>
                            </div>
                            <div className={styles.body}>
                                <div className="row">
                                    {
                                        dataSetting.language.list.map((c_item, c_idx) =>
                                            <div
                                                key={c_idx}
                                                className={classes("col", "col-12", "col-lg-6", "col-padding-vertical")}
                                            >
                                                <p className={styles.label}>{c_item[lang]}</p>
                                                <div className={styles.list}>
                                                    {
                                                        dataSetting.language.level.map((i_item, i_idx) =>
                                                            <div
                                                                key={i_idx}
                                                                className={classes(
                                                                    styles.item,
                                                                    language && language.find((e) => {
                                                                        return e.lang === c_idx.toString() && e.level === i_idx.toString()
                                                                    }) && styles.active
                                                                )}
                                                                onClick={() => {
                                                                    handleLanguage(
                                                                        {
                                                                            lang: c_idx.toString(),
                                                                            level: i_idx.toString()
                                                                        }
                                                                    )
                                                                }}
                                                            >
                                                                <span>{i_item[lang]}</span>
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>

                        <div className={styles.wrapper}>
                            <div className={styles.head}>
                                <div className={styles.title}>{translate('section_description_skills')}:</div>
                            </div>
                            <div className={styles.body}>
                                <div className="row">
                                    {
                                        dataSetting.job.map((c_item, c_idx) =>
                                            c_idx !== 0 &&
                                            <div
                                                key={c_idx}
                                                className={classes("col", "col-12", "col-lg-6", "col-padding-vertical")}
                                            >
                                                <p className={styles.label}>{c_item[lang]}</p>
                                                <div className={styles.list}>
                                                    {
                                                        c_item.list &&
                                                        c_item.list.map((i_item, i_idx) =>
                                                            <div
                                                                key={i_idx}
                                                                className={classes(
                                                                    styles.item,
                                                                    skills.find((e) => {
                                                                        return e.id === c_idx.toString() && e.list.find((i) => {
                                                                            return i === i_idx.toString()
                                                                        })
                                                                    }) && styles.active
                                                                )}
                                                                onClick={() => {
                                                                    handleSkill(
                                                                        c_idx.toString(),
                                                                        i_idx.toString()
                                                                    )
                                                                }}
                                                            >
                                                                <span>{i_item[lang]}</span>
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Applicant;
