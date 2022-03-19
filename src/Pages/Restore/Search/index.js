import React, {useState} from "react";
import {ReactTitle} from "react-meta-tags";

import { server } from '../../../redux/types/types';

import classes from "classnames";

import {translate, translateString} from "../../../i18n/translate";

import Button from "../../../Components/Button";
import Field from "../../../Components/Field";
import Breadcrumbs from "../../../Components/Breadcrumbs";
import Notification from "../../../Components/Notification";

import styles from './index.module.scss';


const Search = () => {

    const breadcrumbs = [
        {
            url: "/",
            text: translate("menu_link_1")
        },
        {
            text: translate("menu_link_17")
        }
    ]

    const [email, setEmail] = useState('tereschenko23041991@gmail.com')

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        formData.set('email', email)

        fetch(`${server.PATH}recovery/show`, {
            method: 'POST',
            body: formData
        })
            .then(success => success.json())
            .then(success => {
                if(success === 0) {
                    setSuccess(translate('alert-restore-send'))

                    localStorage.setItem('restore_email', email)
                }
                else if(success === 1) {
                    setError(translate('alert-restore-not-found'))
                }
                else if(success === 2) {
                    setSuccess(translate('alert-restore-not-empty'))
                }
            })
            .catch(error => console.log("Error", error))
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
            <section className="section">
                <div className="container-fluid">
                    <div className="container">
                        <form onSubmit={handleSubmit}>
                            <div className={styles.form}>
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
                                                <p>{translate('alert-restore-email')}</p>
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
                                            <div className={styles.wrap}>
                                                <Field
                                                    type={"email"}
                                                    required={true}
                                                    placeholder={'profile_email'}
                                                    data={email || ''}
                                                    action={setEmail}
                                                />
                                            </div>
                                            <Button
                                                type={"submit"}
                                                action={false}
                                                placeholder={translate('button-continue')}
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

export default Search;
