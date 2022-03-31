import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ReactTitle} from "react-meta-tags";

import {server} from "../../../../redux/types/types";

import classes from "classnames";

import checkForm from "../../../../helpers/checkForm";

import {setTeamData} from "../../../../redux/actions/teamActions";

import {translate, translateString} from "../../../../i18n/translate";

import Empty from "../../../../Components/Empty";
import Breadcrumbs from "../../../../Components/Breadcrumbs";
import Button from "../../../../Components/Button";
import Notification from "../../../../Components/Notification";
import ProfileCard from "../../../../Modules/ProfileCard";
import Field from "../../../../Components/Field";

import styles from './index.module.scss';

const getTeam = (arr, id) => {
    return arr.find((e) => {return e === id});
}

const Team = () => {
    const dispatch = useDispatch()

    const { team } = useSelector(state => state.teamReducer)
    const { dataCard } = useSelector(state => state.cardReducer)
    const { dataSetting } = useSelector(state => state.settingReducer)

    const breadcrumbs = [
        {
            url: "/",
            text: translate("menu_link_1")
        },
        {
            text: translate("menu_link_4")
        }
    ]

    const [lang] = useState(translateString('lang'))

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [notification, setNotification] = useState({
        type: null,
        code: 0
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        const c_Form = checkForm([email, name])

        if (c_Form.code === 0) {
            const formData = new FormData(e.target);

            formData.set('email', email)
            formData.set('name', name)
            formData.set('team', team)

            fetch(`${server.PATH}team/send`, {
                method: 'POST',
                body: formData
            })
                .then(success => {
                    if(success.ok) {
                        setNotification({
                            type: 'success',
                            code: '4'
                        })

                        setTimeout(() => {
                            dispatch(setTeamData([]))
                            localStorage['team'] = '[]'
                        }, 3000);
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
            <ReactTitle title={`Global Workers | ${translateString('menu_link_4')}`} />
            <section className={classes("section", "alt")}>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className={classes("col", "col-12")}>
                                <Breadcrumbs data={breadcrumbs}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            {
                                team.length > 0
                                    ?
                                    dataCard.map((item, idx) =>
                                        getTeam(team, item.id) &&
                                        <div key={idx} className={classes("col", "col-12", "col-md-6", "col-lg-4")}>
                                            <ProfileCard
                                                setting={dataSetting}
                                                data={item}
                                                lang={lang}
                                            />
                                        </div>

                                    )
                                    :
                                    <Empty />
                            }
                        </div>
                    </div>
                </div>
            </section>

            {
                team.length > 0 &&
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
                                        <div className={styles.wrapper}>
                                            <Field
                                                type={"text"}
                                                placeholder={'contact_name'}
                                                data={name}
                                                action={setName}
                                                icon={1}
                                            />
                                        </div>
                                        <div className={styles.wrapper}>
                                            <Field
                                                type={"email"}
                                                placeholder={'contact_email'}
                                                data={email}
                                                action={setEmail}
                                                icon={2}
                                            />
                                        </div>
                                        <div className={styles.wrapper}>
                                            <Button
                                                type={"submit"}
                                                action={false}
                                                placeholder={translate('contact_button-2')}
                                            />
                                        </div>
                                    </>
                                }
                            </form>
                        </div>
                    </div>
                </section>
            }
        </main>
    );
}

export default Team;
