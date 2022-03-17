import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {ReactTitle} from "react-meta-tags";

import { server } from '../../redux/types/types';

import classes from "classnames";

import {translate, translateString} from "../../i18n/translate";

import { loadProfileData } from "../../redux/actions/profileActions";
import { setUserData } from "../../redux/actions/userActions";

import Button from "../../Components/Button";
import Field from "../../Components/Field";
import Password from "../../Components/Password";
import Breadcrumbs from "../../Components/Breadcrumbs";

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
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email.length > 0 && password.length > 0) {
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

                        setError('')
                    }
                    else {
                        setError(translate("alert-authorization"))
                    }
                })
                .catch(error => console.log("Error", error));
        }
    }

    useEffect(() => {
        return () => {
            setError('');
        }
    }, []);

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
                                {
                                    error &&
                                    <div className={styles.wrap}>
                                        <div className={styles.error}>{error}</div>
                                    </div>
                                }
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
