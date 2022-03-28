import React, {useEffect, useState} from "react";
import {ReactTitle} from "react-meta-tags";
import {useDispatch, useSelector} from "react-redux";

import {loadProfileData} from "../../../../redux/actions/profileActions";

import classes from "classnames";

import request from "../../_helpers/request";
import checkForm from "../../../../helpers/checkForm";

import {translate, translateString} from "../../../../i18n/translate";

import Radio from "../../../../Components/Radio";
import Field from "../../../../Components/Field";
import Button from "../../../../Components/Button";
import Preloader from "../../../../Components/Preloader";
import Breadcrumbs from "../../../../Components/Breadcrumbs";
import Notification from "../../../../Components/Notification";

import styles from './index.module.scss';

const Personal = () => {
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
            text: translate("menu_link_11")
        }
    ]

    const [loader, setLoader] = useState(false);
    const [tab, setTab] = useState(0);

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState();
    const [gender, setGender] = useState();

    const [notification, setNotification] = useState({
        type: null,
        code: 0
    })

    const updateProfile = () => {
        setTimeout(() => {
            dispatch(loadProfileData())
        }, 2000);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const c_Form = checkForm([name, surname, age, gender])

        if (c_Form.code === 0) {
            setLoader(true)

            setNotification({
                type: null,
                code: 0
            })

            const formData = new FormData(e.target);

            formData.set('type', '1')
            formData.set('name', name)
            formData.set('surname', surname)
            formData.set('age', age)
            formData.set('gender', gender)

            request(formData, setLoader, true)

            updateProfile()
        }
        else {
            setNotification(c_Form)
        }
    }

    useEffect(() => {
        setName(dataProfile.name)
        setSurname(dataProfile.surname)
        setAge(dataProfile.age)
        setGender(dataProfile.gender)
    }, [dataProfile]);

    return (
        <main>
            <ReactTitle title={`Global Workers | ${translateString('menu_link_11')}`} />
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

                        <div className={styles.tab}>
                            {
                                loader &&
                                <div className={styles.loader}>
                                    <Preloader />
                                </div>
                            }
                            <div className={styles.header}>
                                <div
                                    className={classes(styles.link, tab === 0 && styles.active)}
                                    onClick={() => {setTab(0)}}
                                >
                                    {translate('section_description_general')}
                                </div>
                            </div>

                            <div className={classes(styles.panel, tab === 0 && styles.active)}>
                                <form
                                    className={classes(
                                        styles.form,
                                        loader && styles.disabled
                                    )}
                                    onSubmit={handleSubmit}
                                >
                                    <div className="row">
                                        <div className={classes("col", "col-12", "col-lg-6", "col-padding-vertical")}>
                                            <p className={styles.label}>{translate('profile_name')} <span>*</span></p>
                                            <Field
                                                type={"text"}
                                                placeholder={false}
                                                data={name || ''}
                                                action={setName}
                                                icon={1}
                                            />
                                        </div>
                                        <div className={classes("col", "col-12", "col-lg-6", "col-padding-vertical")}>
                                            <p className={styles.label}>{translate('profile_surname')} <span>*</span></p>
                                            <Field
                                                type={"text"}
                                                placeholder={false}
                                                data={surname || ''}
                                                action={setSurname}
                                                icon={1}
                                            />
                                        </div>
                                        <div className={classes("col", "col-12", "col-lg-6", "col-padding-vertical")}>
                                            <p className={styles.label}>{translate('profile_birth')} <span>*</span></p>
                                            <Field
                                                type={"date"}
                                                placeholder={false}
                                                data={age || ''}
                                                action={setAge}
                                            />
                                        </div>
                                        <div className={classes("col", "col-12", "col-lg-6")} />
                                        <div className={classes("col", "col-12", "col-lg-6", "col-padding-vertical")}>
                                            <p className={styles.label}>{translate('profile_gender')} <span>*</span></p>
                                            {
                                                dataSetting.gender.slice(1, dataSetting.length).map((item, idx) =>
                                                    <div
                                                        key={idx}
                                                        className={styles.block}
                                                    >
                                                        <Radio
                                                            lang={lang}
                                                            item={item}
                                                            name={'gender'}
                                                            date={gender}
                                                            action={setGender}
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
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Personal;
