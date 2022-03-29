import React, {useEffect, useState} from "react";
import {ReactTitle} from "react-meta-tags";
import {useDispatch, useSelector} from "react-redux";

import classes from "classnames";

import {server} from "../../../../redux/types/types";

import {loadProfileData} from "../../../../redux/actions/profileActions";

import checkForm from "../../../../helpers/checkForm";
import getId from "../../../../helpers/getId";

import {translate, translateString} from "../../../../i18n/translate";

import Breadcrumbs from "../../../../Components/Breadcrumbs";
import Field from "../../../../Components/Field";
import Button from "../../../../Components/Button";
import Preloader from "../../../../Components/Preloader";
import Notification from "../../../../Components/Notification";

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

    const [loader, setLoader] = useState(false)

    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();

    const [notification, setNotification] = useState({
        type: null,
        code: 0
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        const c_Form = checkForm([email, phone])

        if (c_Form.code === 0) {

            const formData = new FormData(e.target);

            formData.set('id', getId())
            formData.set('type', '3')
            formData.set('email', email)
            formData.set('phone', phone)

            fetch(`${server.PATH}worker/update`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('user_token')}`
                },
                body: formData
            })
                .then(success => success.json())
                .then(success => {
                    if(success === 0){
                        setLoader(true)

                        setNotification({
                            type: null,
                            code: 0
                        })

                        setTimeout(() => {
                            setLoader(false)
                            dispatch(loadProfileData())
                        }, 2000);
                    }
                    else if(success === 1) {
                        setNotification({
                            type: 'error',
                            code: 9
                        })
                    }
                })
                .catch(error => console.log("Error", error));
        }
        else {
            setNotification(c_Form)
        }
    }

    useEffect(() => {
        setEmail(dataProfile.email)
        setPhone(dataProfile.phone)
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
                                <div className={classes(styles.link, styles.active)}>
                                    {translate('section_description_contact')}
                                </div>
                            </div>
                            <div className={classes(styles.panel, styles.active)}>
                                <form
                                    className={classes(
                                        styles.form,
                                        loader && styles.disabled
                                    )}
                                    onSubmit={handleSubmit}
                                >
                                    <div className="row">
                                        <div className={classes("col", "col-12", "col-md-6", "col-padding-vertical")}>
                                            <p className={styles.label}>{translate('profile_email')} <span>*</span></p>
                                            <Field
                                                type={"email"}
                                                required={false}
                                                placeholder={false}
                                                data={email || ''}
                                                action={setEmail}
                                                icon={2}
                                            />
                                        </div>
                                        <div className={classes("col", "col-12", "col-md-6", "col-padding-vertical")}>
                                            <p className={styles.label}>{translate('profile_phone')} <span>*</span></p>
                                            <Field
                                                type={"text"}
                                                required={false}
                                                placeholder={false}
                                                data={phone || ''}
                                                action={setPhone}
                                                icon={4}
                                            />
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

export default Contact;
