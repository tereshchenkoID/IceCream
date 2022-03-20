import React, {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
import {ReactTitle} from "react-meta-tags";

import { server } from '../../redux/types/types';

import classes from "classnames";

import {translate, translateString} from "../../i18n/translate";

import Button from "../../Components/Button";
import Field from "../../Components/Field";
import Password from "../../Components/Password";
import Breadcrumbs from "../../Components/Breadcrumbs";
import Notification from "../../Components/Notification";

import styles from './index.module.scss';

const Registration = () => {
    const breadcrumbs = [
        {
            url: "/",
            text: translate("menu_link_1")
        },
        {
            text: translate("menu_link_18")
        }
    ]

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password === repeatPassword) {

            if (password.length > 6 && repeatPassword.length > 6) {

                const formData = new FormData(e.target);

                formData.set('email', email)
                formData.set('password', password)

                fetch(`${server.PATH}registration/show`, {
                    method: 'POST',
                    body: formData
                })
                    .then(success => success.json())
                    .then(success => {
                        if (success === 0) {
                            setError('')
                            setSuccess("Ваша учетная запись успешно создана")
                        }
                        else if (success === 1) {
                            setError("Данный e-mail уже был зарегистрирован")
                        }
                    })
                    .catch(error => console.log("Error", error));
            }
            else {
                setError(translate('alert-length-password'))
            }
        }
        else {
            setError(translate('alert-match-password'))
        }
    }

    useEffect(() => {
        return () => {
            setError('');
        }
    }, []);

    return (
        <main>
            <ReactTitle title={`Global Workers | ${translateString('menu_link_18')}`} />
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
                        <form onSubmit={handleSubmit}>
                            <div className={styles.form}>
                                <div className={styles.wrap}>
                                    <div className={styles.titles}>
                                        <h5 className={styles.title}>{translate('registration-title')}</h5>
                                        <p className={styles.subtitle}>
                                            <span>{translate('registration-subtitle')}</span>
                                            <NavLink
                                                to={'/login'}
                                                className={styles.link}
                                            >
                                                {translate('menu_link_15')}!
                                            </NavLink>
                                        </p>
                                    </div>
                                </div>
                                {
                                    error &&
                                    <div className={styles.wrap}>
                                        <Notification
                                            text={error}
                                            type={'error'}
                                        />
                                    </div>
                                }

                                {
                                    success
                                        ?
                                        <div className={styles.wrap}>
                                            <Notification
                                                text={success}
                                                type={'success'}
                                            />
                                        </div>
                                        :
                                        <>
                                            <div className={styles.wrap}>
                                                <Field
                                                    type={"email"}
                                                    required={true}
                                                    placeholder={'profile_email'}
                                                    data={email || ''}
                                                    action={setEmail}
                                                />
                                            </div>
                                            <div className={styles.wrap}>
                                                <Password
                                                    data={password}
                                                    action={setPassword}
                                                    required={true}
                                                    placeholder={'profile_password'}
                                                />
                                            </div>
                                            <div className={styles.wrap}>
                                                <Password
                                                    data={repeatPassword}
                                                    action={setRepeatPassword}
                                                    required={true}
                                                    placeholder={'profile_repeat_password'}
                                                />
                                            </div>
                                            <Button
                                                type={"submit"}
                                                action={false}
                                                placeholder={translate('menu_link_18')}
                                            />
                                        </>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Registration;
