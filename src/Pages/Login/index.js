import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";
import {ReactTitle} from "react-meta-tags";

import { server } from '../../redux/types/types';

import checkForm from "../../helpers/checkForm";

import classes from "classnames";

import {translate, translateString} from "../../i18n/translate";

import { setUserData } from "../../redux/actions/userActions";
import { loadProfileData } from "../../redux/actions/profileActions";

import Button from "../../Components/Button";
import Field from "../../Components/Field";
import Password from "../../Components/Password";
import Breadcrumbs from "../../Components/Breadcrumbs";
import Notification from "../../Components/Notification";

import styles from './index.module.scss';

const Login = () => {
    const dispatch = useDispatch();

    const breadcrumbs = [
        {
            url: "/",
            text: translate("menu_link_1")
        },
        {
            text: translate("menu_link_15")
        }
    ]

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [notification, setNotification] = useState({
        type: null,
        code: 0
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        const c_Form = checkForm([email, password])

        if (c_Form.code === 0) {

            const formData = new FormData(e.target);

            formData.set('email', email)
            formData.set('password', password)

            fetch(`${server.PATH}login`, {
                method: 'POST',
                body: formData
            })
                .then(success => success.json())
                .then(success => {
                    if(success && success.token) {
                        localStorage.setItem('user_role', '1')
                        localStorage.setItem('user_id', success.id.toString())
                        localStorage.setItem('user_token', success.token.toString())

                        dispatch(loadProfileData())
                        dispatch(setUserData(1))
                    }
                    else {
                        setNotification({
                            type: 'error',
                            code: 1
                        })
                    }
                })
                .catch(error => console.log("Error", error));
        }
        else {
            setNotification(c_Form)
        }
    }

    return (
        <main>
            <ReactTitle title={`Global Workers | ${translateString('menu_link_15')}`} />
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
                                        <h5 className={styles.title}>{translate('login-title')}</h5>
                                        <p className={styles.subtitle}>
                                            <span>{translate('login-subtitle')}</span>
                                            <NavLink
                                                to={'/registration'}
                                                className={styles.link}
                                            >
                                                {translate('menu_link_18')}!
                                            </NavLink>
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.wrap}>
                                    <Notification date={notification} />
                                </div>
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
                                    <NavLink
                                        to={'/restore/search'}
                                        className={styles.link}
                                    >
                                        {translate('alert-restore')}
                                    </NavLink>
                                </div>
                                <Button
                                    type={"submit"}
                                    action={false}
                                    placeholder={translate('menu_link_15')}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Login;
