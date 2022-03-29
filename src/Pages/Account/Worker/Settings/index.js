import React, {useEffect, useState} from "react";
import {ReactTitle} from "react-meta-tags";
import {useDispatch, useSelector} from "react-redux";

import classes from "classnames";

import {server} from "../../../../redux/types/types";

import checkPassword from "../../../../helpers/checkPassword";
import checkForm from "../../../../helpers/checkForm";
import getId from "../../../../helpers/getId";
import request from "../../_helpers/request";

import {translate, translateString} from "../../../../i18n/translate";

import {loadCardData} from "../../../../redux/actions/cardActions";
import {loadProfileData} from "../../../../redux/actions/profileActions";

import GeneratePassword from "../../../../Modules/GeneratePassword";
import Breadcrumbs from "../../../../Components/Breadcrumbs";
import Password from "../../../../Components/Password";
import Button from "../../../../Components/Button";
import Notification from "../../../../Components/Notification";
import Preloader from "../../../../Components/Preloader";

import styles from './index.module.scss';
import {setAccessData} from "../../../../redux/actions/accessActions";

const checkProfile = (data) => {
    return !!(
        data.name &&
        data.surname &&
        data.vaccinated &&
        data.age &&
        data.available &&
        data.country &&
        data.region &&
        data.eu_allowed_person &&
        data.gender
    )
}

const Settings = () => {
    const dispatch = useDispatch();

    let { dataProfile } = useSelector(state => state.profileReducer);

    const breadcrumbs = [
        {
            url: "/",
            text: translate("menu_link_1")
        },
        {
            text: translate("menu_link_13")
        }
    ]

    const [loader, setLoader] = useState(false);
    const [tab, setTab] = useState(0);

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [visibility, setVisibility] = useState('1');

    const [notification, setNotification] = useState({
        type: null,
        code: 0
    })

    const updateProfile = () => {
        setTimeout(() => {
            dispatch(loadProfileData())
            dispatch(loadCardData())
        }, 2000);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const c_Form = checkForm([currentPassword, newPassword, repeatPassword])
        const c_Password = checkPassword(newPassword, repeatPassword)

        if (c_Form.code === 0) {

            if (c_Password.code === 0) {

                const formData = new FormData(e.target);

                formData.set('id', getId())
                formData.set('type', '4')
                formData.set('new_password', newPassword)
                formData.set('current_password', currentPassword)

                fetch(`${server.PATH}worker/update`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('user_token')}`
                    },
                    body: formData
                })
                    .then(success => success.json())
                    .then(success => {
                        if (success === 0) {
                            setLoader(true)

                            setNotification({
                                type: null,
                                code: 0
                            })

                            setNewPassword('')
                            setCurrentPassword('')
                            setRepeatPassword('')

                            setTimeout(() => {
                                setLoader(false)
                            }, 2000);
                        }
                        else {
                            setNotification({
                                type: 'error',
                                code: '2'
                            })
                        }
                    })
                    .catch(error => console.log("Error", error));
            }
            else {
                setNotification(c_Password)
            }
        }
        else {
            setNotification(c_Form)
        }
    }

    const handleVisibility = () => {
        if (checkProfile(dataProfile)) {
            visibility === '1'
            ?
                setVisibility('0')
            :
                setVisibility('1')

            setNotification({
                type: null,
                code: 0
            })

            const formData = new FormData();

            formData.set('type', '5')
            formData.set('visibility', visibility === '1' ? '0' : '1')

            request(formData, setLoader, false)

            updateProfile()
        }
        else {
            setNotification({
                type: 'error',
                code: '5'
            })
        }
    }

    const handleDelete = () => {
        const formData = new FormData();

        formData.set('type', '10')

        request(formData, setLoader, false)

        dispatch(setAccessData(false))
        localStorage.removeItem('user_id')
        localStorage.removeItem('user_token')
    }

    useEffect(() => {
        dataProfile &&
            setVisibility(dataProfile.visibility)
    }, [dataProfile]);

    return (
        <main>
            <ReactTitle title={`Global Workers | ${translateString('menu_link_13')}`} />
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
                                    {translate('section_description_password')}
                                </div>
                                <div
                                    className={classes(styles.link, tab === 1 && styles.active)}
                                    onClick={() => {setTab(1)}}
                                >
                                    {translate('section_description_delete')}
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
                                        <div className={classes("col", "col-12", "col-md-6", "col-lg-4", "col-padding-vertical")}>
                                            <p className={styles.label}>{translate('profile_current_password')} <span>*</span></p>
                                            <Password
                                                data={currentPassword}
                                                action={setCurrentPassword}
                                                placeholder={false}
                                                required={false}
                                            />
                                        </div>
                                        <div className={classes("col", "col-12", "col-md-6", "col-lg-4", "col-padding-vertical")}>
                                            <p className={styles.label}>{translate('profile_new_password')} <span>*</span></p>
                                            <Password
                                                data={newPassword}
                                                action={setNewPassword}
                                                placeholder={false}
                                                required={false}
                                            />
                                        </div>
                                        <div className={classes("col", "col-12", "col-md-6", "col-lg-4", "col-padding-vertical")}>
                                            <p className={styles.label}>{translate('profile_repeat_password')} <span>*</span></p>
                                            <Password
                                                data={repeatPassword}
                                                action={setRepeatPassword}
                                                placeholder={false}
                                                required={false}
                                            />
                                        </div>
                                        <div className={classes("col", "col-12", "col-padding-vertical")}>
                                            <GeneratePassword />
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
                            <div className={classes(styles.panel, tab === 1 && styles.active)}>
                                <div className="row">
                                    <div className={classes("col", "col-12")}>
                                        <div className={styles.option}>
                                            <div
                                                onClick={() => {
                                                    handleVisibility()
                                                }}
                                            >
                                                {
                                                    visibility === '1'
                                                        ?
                                                        <button className={classes(styles.visibility, styles.hide)}>{translate('profile_hide')}</button>
                                                        :
                                                        <button className={classes(styles.visibility, styles.show)}>{translate('profile_show')}</button>
                                                }
                                            </div>
                                            <div className={styles.divider} />
                                            <button
                                                className={classes(styles.visibility, styles.hide)}
                                                onClick={() => {
                                                    handleDelete()
                                                }}
                                            >
                                                {translate('button-delete')}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Settings;
