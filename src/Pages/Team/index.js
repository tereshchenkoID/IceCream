import React, {useState} from "react";
import {useSelector} from "react-redux";
import {ReactTitle} from "react-meta-tags";

import classes from "classnames";

import checkForm from "../../helpers/checkForm";

import getAllStorage from "../../helpers/localStorage";

import {translate, translateString} from "../../i18n/translate";

import Breadcrumbs from "../../Components/Breadcrumbs";
import ProfileCard from "../../Modules/ProfileCard";
import Empty from "../../Components/Empty";
import Button from "../../Components/Button";
import Notification from "../../Components/Notification";

import styles from './index.module.scss';

const getTeam = (arr, name) => {
    return arr.find((e) => {return e === name});
}

const Team = () => {
    const breadcrumbs = [
        {
            url: "/",
            text: translate("menu_link_1")
        },
        {
            text: translate("menu_link_4")
        }
    ]

    const [lang] = useState(translateString('lang'));
    const [favArray, setFavArray] = useState(getAllStorage('favourite'));
    const [teamArray, setTeamArray] = useState(getAllStorage('team'));

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    let { dataCard } = useSelector(state => state.cardReducer);
    let { dataSetting } = useSelector(state => state.settingReducer);

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
            formData.set('team', teamArray)

            fetch('https://global-workers.eu/server/team/send', {
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
                            setTeamArray([])

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
                                teamArray.length > 0
                                    ?
                                    dataCard.map((item, idx) =>
                                        getTeam(teamArray, item.id) &&
                                        <div key={idx} className={classes("col", "col-12", "col-md-6", "col-lg-4")}>
                                            <ProfileCard
                                                setting={dataSetting}
                                                data={item}
                                                lang={lang}
                                                favArray={favArray}
                                                setFavArray={setFavArray}
                                                teamArray={teamArray}
                                                setTeamArray={setTeamArray}
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
                teamArray.length > 0 &&
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
                                            <div className={styles.icon}>
                                                <svg viewBox="0 0 50 50">
                                                    <path d="M25,1C11.767,1,1,11.767,1,25c0,7.091,3.094,13.472,8,17.869v0.017l0.348,0.3c0.061,0.053,0.128,0.097,0.19,0.149 c0.431,0.364,0.875,0.713,1.331,1.047c0.123,0.09,0.246,0.177,0.371,0.264c0.484,0.34,0.979,0.664,1.487,0.968 c0.085,0.051,0.172,0.099,0.257,0.148c0.557,0.324,1.126,0.629,1.71,0.908c0.006,0.003,0.012,0.005,0.018,0.008 c1.249,0.595,2.559,1.082,3.915,1.456c0.025,0.007,0.05,0.015,0.075,0.021c0.641,0.175,1.293,0.322,1.954,0.443 c0.062,0.011,0.123,0.022,0.185,0.033c0.638,0.112,1.284,0.201,1.939,0.262c0.075,0.007,0.15,0.011,0.224,0.017 C23.663,48.965,24.327,49,25,49s1.337-0.035,1.996-0.09c0.075-0.006,0.15-0.01,0.224-0.017c0.655-0.06,1.301-0.15,1.939-0.262 c0.062-0.011,0.123-0.022,0.185-0.033c0.661-0.121,1.313-0.268,1.954-0.443c0.025-0.007,0.05-0.014,0.075-0.021 c1.356-0.374,2.666-0.861,3.915-1.456c0.006-0.003,0.012-0.005,0.018-0.008c0.584-0.279,1.153-0.585,1.71-0.908 c0.086-0.05,0.172-0.097,0.257-0.148c0.509-0.304,1.004-0.629,1.487-0.968c0.124-0.087,0.248-0.174,0.371-0.264 c0.456-0.334,0.9-0.683,1.331-1.047c0.062-0.052,0.129-0.096,0.19-0.149l0.348-0.3v-0.017c4.906-4.398,8-10.778,8-17.869 C49,11.767,38.233,1,25,1z M25,25c-4.411,0-8-3.589-8-8s3.589-8,8-8s8,3.589,8,8S29.411,25,25,25z M28,27c6.065,0,11,4.935,11,11 v3.958c-0.042,0.035-0.086,0.067-0.128,0.102c-0.395,0.321-0.8,0.626-1.214,0.918c-0.092,0.065-0.182,0.132-0.274,0.195 c-0.447,0.305-0.906,0.591-1.373,0.862c-0.085,0.05-0.171,0.099-0.257,0.148c-0.49,0.275-0.989,0.533-1.498,0.769 c-0.053,0.025-0.107,0.049-0.161,0.073c-1.661,0.755-3.411,1.302-5.212,1.626c-0.057,0.01-0.114,0.021-0.171,0.031 c-0.567,0.097-1.139,0.172-1.715,0.225c-0.079,0.007-0.159,0.012-0.239,0.018C26.175,46.97,25.589,47,25,47 s-1.175-0.03-1.758-0.077c-0.079-0.006-0.159-0.011-0.239-0.018c-0.576-0.053-1.148-0.127-1.715-0.225 c-0.057-0.01-0.114-0.02-0.171-0.031c-1.801-0.324-3.551-0.871-5.212-1.626c-0.054-0.025-0.108-0.048-0.161-0.073 c-0.509-0.236-1.008-0.494-1.498-0.769c-0.086-0.049-0.171-0.098-0.257-0.148c-0.467-0.27-0.926-0.557-1.373-0.862 c-0.093-0.063-0.183-0.13-0.274-0.195c-0.414-0.292-0.819-0.596-1.214-0.918c-0.042-0.034-0.086-0.067-0.128-0.102V38 c0-6.065,4.935-11,11-11H28z M41,40.076V38c0-6.271-4.464-11.519-10.38-12.735C33.261,23.464,35,20.431,35,17 c0-5.514-4.486-10-10-10s-10,4.486-10,10c0,3.431,1.739,6.464,4.38,8.265C13.464,26.481,9,31.729,9,38v2.076 C5.284,36.135,3,30.831,3,25C3,12.869,12.869,3,25,3s22,9.869,22,22C47,30.831,44.716,36.135,41,40.076z"/>
                                                </svg>
                                            </div>
                                            <input
                                                type={'text'}
                                                className={styles.field}
                                                placeholder={translateString('contact_name')}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className={styles.wrapper}>
                                            <div className={styles.icon}>
                                                <svg viewBox="0 0 32 32">
                                                    <path
                                                        stroke="none"
                                                        strokeWidth="1"
                                                        fillRule="evenodd"
                                                        fill="#000"
                                                        d="M5.31500722,9.27391933 C5.12106043,9.45739405 5,9.71770487 5,10.0068455 L5,21.9931545 C5,22.2828882 5.11915965,22.5440384 5.31310687,22.7277332 L5.31310687,22.7277332 L13.05,16 L5.31500722,9.27391933 L5.31500722,9.27391933 L5.31500722,9.27391933 Z M27.6868931,9.27226685 C27.8808404,9.45596162 28,9.71711185 28,10.0068455 L28,21.9931545 C28,22.2822951 27.8789396,22.542606 27.6849928,22.7260807 L19.95,16 L27.6868931,9.27226685 L27.6868931,9.27226685 Z M19.2018297,16.6505829 L26.5,23 L6.5,23 L13.7981703,16.6505829 L16.5,19 L19.2018297,16.6505829 L19.2018297,16.6505829 Z M6.00359486,8 C4.89703997,8 4,8.89451376 4,9.99406028 L4,22.0059397 C4,23.1072288 4.88976324,24 6.00359486,24 L26.9964051,24 C28.10296,24 29,23.1054862 29,22.0059397 L29,9.99406028 C29,8.8927712 28.1102368,8 26.9964051,8 L6.00359486,8 L6.00359486,8 Z M16.5,17.7000122 L26.5,9 L6.5,9 L16.5,17.7000122 L16.5,17.7000122 Z"
                                                    />
                                                </svg>
                                            </div>
                                            <input
                                                type={'email'}
                                                className={styles.field}
                                                placeholder={translateString('contact_email')}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className={styles.wrap}>
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
