import React, {useEffect, useState} from "react";
import {ReactTitle} from "react-meta-tags";
import {useDispatch, useSelector} from "react-redux";

import classes from "classnames";

import {loadProfileData} from "../../../redux/actions/profileActions";

import request from "../_helpers/request";
import checkForm from "../../../helpers/checkForm";

import {translate, translateString} from "../../../i18n/translate";

import Breadcrumbs from "../../../Components/Breadcrumbs";
import Field from "../../../Components/Field";
import Button from "../../../Components/Button";
import Preloader from "../../../Components/Preloader";
import Notification from "../../../Components/Notification";

import styles from './index.module.scss';

const Contact = () => {
    const dispatch = useDispatch();

    let { dataProfile } = useSelector(state => state.profileReducer);

    const breadcrumbs = [
        {
            url: "/",
            text: translate("menu_link_1")
        },
        {
            text: translate("menu_link_16")
        }
    ]

    const [loader, setLoader] = useState(false);
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();

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

        const c_Form = checkForm([email, phone])

        if (c_Form.code === 0) {
            setLoader(true)

            setNotification({
                type: null,
                code: 0
            })

            const formData = new FormData(e.target);

            formData.set('type', '3')
            formData.set('email', email)
            formData.set('phone', phone)

            request(formData, setLoader, true)

            updateProfile()
        }
        else {
            setNotification(c_Form)
        }
    }

    useEffect(() => {
        dataProfile &&
            setEmail(dataProfile.contact.email)
            setPhone(dataProfile.contact.phone)
    }, [dataProfile]);

    return (
        <main>
            <ReactTitle title={`Global Workers | ${translateString('menu_link_16')}`} />
            <section className={classes("section", "alt")}>
                <div className="container-fluid">
                    <div className="container">
                        <Breadcrumbs data={breadcrumbs}/>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container-fluid">
                    <div className="container">
                        <div className={styles.wrap}>
                            <Notification date={notification} />
                        </div>
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
                                    <div className={styles.title}>{translate('section_description_contact')}:</div>
                                </div>
                                <div className={styles.body}>
                                    <div className="row">
                                        <div className={classes("col", "col-12", "col-lg-6", "col-padding-vertical")}>
                                            <p className={styles.label}>{translate('profile_email')} <span>*</span></p>
                                            <Field
                                                type={"email"}
                                                required={false}
                                                placeholder={false}
                                                data={email || ''}
                                                action={setEmail}
                                            />
                                        </div>
                                        <div className={classes("col", "col-12", "col-lg-6", "col-padding-vertical")}>
                                            <p className={styles.label}>{translate('profile_phone')} <span>*</span></p>
                                            <Field
                                                type={"text"}
                                                required={false}
                                                placeholder={false}
                                                data={phone || ''}
                                                action={setPhone}
                                            />
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
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Contact;
