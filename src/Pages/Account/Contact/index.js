import React, {useEffect, useState} from "react";
import {ReactTitle} from "react-meta-tags";
import {useSelector} from "react-redux";

import classes from "classnames";

import {translate, translateString} from "../../../i18n/translate";

import Breadcrumbs from "../../../Components/Breadcrumbs";
import Field from "../../../Components/Field";
import Button from "../../../Components/Button";
import Loader from "../../../Components/Loader";

import styles from './index.module.scss';

const Contact = () => {
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

    const init = () => {
        setEmail(dataProfile[0].contact.email)
        setPhone(dataProfile[0].contact.phone)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoader(true)

        const formData = new FormData(e.target);

        formData.set('id', localStorage.getItem('user_id'))
        formData.set('type', '3')
        formData.set('email', email)
        formData.set('phone', phone)

        fetch('http://localhost:8888/user/update', {
            method: 'POST',
            body: formData
        })
            .then(success => {
                setTimeout(() => {
                    success.ok && setLoader(false)
                }, 3000);
            })
            .catch(error => console.log("Error", error));
    }

    useEffect(() => {
        dataProfile &&
        dataProfile.length > 0 && init()
    }, [dataProfile]);

    return (
        <main>
            <ReactTitle title={`Global Workers | ${translateString('menu_link_16')}`} />
            {
                loader &&
                <div className={styles.loader}>
                    <Loader />
                </div>
            }
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
                        <form
                            className={classes(
                                styles.form,
                                loader && styles.disabled
                            )}
                            onSubmit={handleSubmit}
                        >
                            <div className={styles.wrapper}>
                                <div className={styles.head}>
                                    <div className={styles.title}>{translate('section_description_contact')}:</div>
                                </div>
                                <div className={styles.body}>
                                    <div className={styles.wrap}>
                                        <div className="row">
                                            <div className={classes("col", "col-12", "col-lg-6", "col-padding-vertical")}>
                                                <p className={styles.label}>{translate('profile_email')} <span>*</span></p>
                                                <Field
                                                    type={"email"}
                                                    required={true}
                                                    placeholder={false}
                                                    data={email || ''}
                                                    action={setEmail}
                                                />
                                            </div>
                                            <div className={classes("col", "col-12", "col-lg-6", "col-padding-vertical")}>
                                                <p className={styles.label}>{translate('profile_phone')} <span>*</span></p>
                                                <Field
                                                    type={"text"}
                                                    required={true}
                                                    placeholder={false}
                                                    data={phone || ''}
                                                    action={setPhone}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Button
                                type={"submit"}
                                placeholder={translate('profile_button_save_settings')}
                            />
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Contact;
