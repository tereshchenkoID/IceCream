import React, {useState} from "react";
import {ReactTitle} from "react-meta-tags";

import { server } from '../../../redux/types/types';

import classes from "classnames";

import checkForm from "../../../helpers/checkForm";

import {useSelector} from "react-redux";

import {translate, translateString} from "../../../i18n/translate";

import Button from "../../../Components/Button";
import Field from "../../../Components/Field";
import Breadcrumbs from "../../../Components/Breadcrumbs";
import Notification from "../../../Components/Notification";

import styles from './index.module.scss';

const Search = () => {
    let { user } = useSelector(state => state.userReducer);

    const breadcrumbs = [
        {
            url: "/",
            text: translate("menu_link_1")
        },
        {
            text: translate("menu_link_17")
        }
    ]

    const [email, setEmail] = useState('')

    const [notification, setNotification] = useState({
        type: null,
        code: 0
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        const c_Form = checkForm([email])

        if (c_Form.code === 0) {
            const formData = new FormData(e.target);

            formData.set('role', user)
            formData.set('email', email)

            fetch(`${server.PATH}recovery/show`, {
                method: 'POST',
                body: formData
            })
                .then(success => success.json())
                .then(success => {
                    if(success === 0) {
                        setNotification({
                            type: 'success',
                            code: 1
                        })

                        localStorage.setItem('restore_email', email)
                    }
                    else if(success === 1) {
                        setNotification({
                            type: 'error',
                            code: 6
                        })
                    }
                    else if(success === 2) {
                        setNotification({
                            type: 'error',
                            code: 7
                        })
                    }
                })
                .catch(error => console.log("Error", error))
        }
        else {
            setNotification(c_Form)
        }
    }

    return (
        <main>
            <ReactTitle title={`Global Workers | ${translateString('menu_link_17')}`} />
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
                            <Notification date={notification} />
                            {
                                notification.type !== 'success' &&
                                <>
                                    <div className={styles.wrap}>
                                        <p>{translate('alert-restore-email')}</p>
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
                                    <Button
                                        type={"submit"}
                                        action={false}
                                        placeholder={translate('button-continue')}
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

export default Search;
