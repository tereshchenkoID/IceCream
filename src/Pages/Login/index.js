import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {ReactTitle} from "react-meta-tags";

import classes from "classnames";

import { server } from '../../redux/types/types';

import checkForm from "../../helpers/checkForm";
import getAccess from "../../helpers/getAccess";

import { setUserData } from "../../redux/actions/userActions";
import { setAccessData } from "../../redux/actions/accessActions";
import { loadProfileData } from "../../redux/actions/profileActions";

import {translate, translateString} from "../../i18n/translate";

import Button from "../../Components/Button";
import Field from "../../Components/Field";
import Password from "../../Components/Password";
import Breadcrumbs from "../../Components/Breadcrumbs";
import Notification from "../../Components/Notification";

import styles from './index.module.scss';

const Login = () => {
    const dispatch = useDispatch();

    let { user } = useSelector(state => state.userReducer);

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

            formData.set('role', user)
            formData.set('email', email)
            formData.set('password', password)

            fetch(`${server.PATH}login`, {
                method: 'POST',
                body: formData
            })
                .then(success => success.json())
                .then(success => {
                    if(success && success.token) {
                        localStorage.setItem('user_id', success.id)
                        localStorage.setItem('user_token', success.token)

                        dispatch(setAccessData(getAccess()))
                        dispatch(setUserData(user))
                        dispatch(loadProfileData())
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
            <section className={classes("section", "fluid")}>
                <div className="container-fluid">
                    <div className="container">
                        <form
                            onSubmit={handleSubmit}
                            className={styles.form}
                        >
                            <div className={styles.wrap}>
                                <div className={styles.titles}>
                                    <h5 className={styles.title}>{translate('login-title')}</h5>
                                    <p className={styles.subtitle}>
                                        <span>{translate('registration-subtitle')}</span>
                                        <NavLink
                                            to={'/registration'}
                                            className={styles.link}
                                        >
                                            {translate('menu_link_18')}!
                                        </NavLink>
                                    </p>
                                </div>
                            </div>
                            <Notification date={notification} />
                            <div className={styles.wrap}>
                                <Field
                                    type={"email"}
                                    placeholder={'profile_email'}
                                    data={email || ''}
                                    action={setEmail}
                                    icon={2}
                                />
                            </div>
                            <div className={styles.wrap}>
                                <Password
                                    data={password}
                                    action={setPassword}
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
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Login;
