import React, {useState} from "react";
import {ReactTitle} from "react-meta-tags";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

import classes from "classnames";

import { server } from '../../redux/types/types';

import checkForm from "../../helpers/checkForm";
import checkPassword from "../../helpers/checkPassword";

import {translate, translateString} from "../../i18n/translate";

import Button from "../../Components/Button";
import Field from "../../Components/Field";
import Password from "../../Components/Password";
import Breadcrumbs from "../../Components/Breadcrumbs";
import Notification from "../../Components/Notification";
import SelectRole from "../../Modules/SelectRole";

import styles from './index.module.scss';

const Registration = () => {
    let { user } = useSelector(state => state.userReducer);

    const breadcrumbs = [
        {
            url: "/",
            text: translate("menu_link_1")
        },
        {
            text: translate("menu_link_18")
        }
    ]

    const [terms, setTerms] = useState(false)
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    const [notification, setNotification] = useState({
        type: null,
        code: 0
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        const c_Form = checkForm([name, surname, email, password])
        const c_Password = checkPassword(password, repeatPassword)

        if (c_Form.code === 0) {

            if (user !== 0) {

                if (c_Password.code === 0) {

                    if (terms) {
                        const formData = new FormData(e.target);

                        formData.set('role', user)
                        formData.set('name', name)
                        formData.set('surname', surname)
                        formData.set('email', email)
                        formData.set('password', password)

                        fetch(`${server.PATH}registration/show`, {
                            method: 'POST',
                            body: formData
                        })
                            .then(success => success.json())
                            .then(success => {

                                if (success === 0) {
                                    setNotification({
                                        type: 'success',
                                        code: 3
                                    })
                                }
                                else if (success === 1) {
                                    setNotification({
                                        type: 'error',
                                        code: 9
                                    })
                                }
                                else if (success === 2) {
                                    setNotification({
                                        type: 'error',
                                        code: 16
                                    })
                                }
                            })
                            .catch(error => console.log("Error", error));
                    }
                    else {
                        setNotification({
                            type: 'error',
                            code: 10
                        })
                    }
                }
                else {
                    setNotification(c_Password)
                }
            }
            else {
                setNotification({
                    type: 'error',
                    code: 16
                })
            }
        }
        else {
            setNotification(c_Form)
        }
    }

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
            <section className={classes("section", "fluid")}>
                <div className="container-fluid">
                    <div className="container">
                        <form
                            onSubmit={handleSubmit}
                            className={styles.form}
                        >
                            <div className={styles.wrap}>
                                <div className={styles.titles}>
                                    <h5 className={styles.title}>{translate('registration-title')}</h5>
                                    <p className={styles.subtitle}>
                                        <span>{translate('login-subtitle')}</span>
                                        <NavLink
                                            to={'/login'}
                                            className={styles.link}
                                        >
                                            {translate('menu_link_15')}!
                                        </NavLink>
                                    </p>
                                </div>
                            </div>
                            <Notification date={notification} />
                            {
                                notification.type !== 'success' &&
                                <>
                                    <div className={styles.wrap}>
                                        <SelectRole />
                                    </div>
                                    <div className={styles.wrap}>
                                        <Field
                                            type={"text"}
                                            placeholder={'profile_name'}
                                            data={name || ''}
                                            action={setName}
                                            icon={1}
                                        />
                                    </div>
                                    <div className={styles.wrap}>
                                        <Field
                                            type={"text"}
                                            placeholder={'profile_surname'}
                                            data={surname || ''}
                                            action={setSurname}
                                            icon={1}
                                        />
                                    </div>
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
                                        <Password
                                            data={repeatPassword}
                                            action={setRepeatPassword}
                                            placeholder={'profile_repeat_password'}
                                        />
                                    </div>
                                    <div className={styles.wrap}>
                                        <div className={styles.checkbox}>
                                            <input
                                                type="checkbox"
                                                id={'terms'}
                                                className={styles.input}
                                                onChange={(e) => setTerms(!terms)}
                                                checked={terms}
                                            />
                                            <label
                                                htmlFor={'terms'}
                                                className={styles.label}
                                            >
                                                {translate('alert-terms')}
                                                <NavLink
                                                    className={styles.link}
                                                    to="../DOC/confidential.pdf"
                                                    target="_blank"
                                                >
                                                    {translate('menu_link_7')}
                                                </NavLink>
                                            </label>
                                        </div>
                                    </div>
                                    <Button
                                        type={"submit"}
                                        action={false}
                                        placeholder={translate('menu_link_18')}
                                    />
                                </>
                            }
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Registration;
