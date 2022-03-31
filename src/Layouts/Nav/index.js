import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";

import classes from 'classnames';

import { setAccessData } from "../../redux/actions/accessActions";

import getRole from "../../helpers/getRole";

import {translate} from "../../i18n/translate";

import Menu from "./Menu";
import Lang from "./Lang";
import Account from "./Account";
import Logo from "../../Components/Logo";
import Link from "../../Components/Link";

import styles from './index.module.scss';


const path = {
    employer: [
        {
            url: '/employer/my/personal',
            text: 'menu_link_11',
        },
        {
            url: '/employer/my/team',
            text: 'menu_link_4',
            count: true
        },
        {
            url: '/employer/my/contact',
            text: 'menu_link_16',
        },
        {
            url: '/employer/my/settings',
            text: 'menu_link_13',
        }
    ],
    worker: [
        {
            url: '/worker/my/personal',
            text: 'menu_link_11',
        },
        {
            url: '/worker/my/applicant',
            text: 'menu_link_12',
        },
        {
            url: '/worker/my/contact',
            text: 'menu_link_16',
        },
        {
            url: '/worker/my/settings',
            text: 'menu_link_13',
        }
    ]
}

const Nav = ({lang, setLang}) => {
    const dispatch = useDispatch();

    const { access } = useSelector(state => state.accessReducer)
    const { team } = useSelector(state => state.teamReducer)

    const [active, setActive] = useState(false)

    const logout = () => {
        dispatch(setAccessData(false))

        localStorage.removeItem('user_id')
        localStorage.removeItem('user_token')
    }

    return (
        <nav className={styles.block}>
            <div className={styles.top}>
                <div className="container-fluid">
                    <div className="container">
                        <div className={styles.wrapper}>
                            <div className={styles.cell}>
                                <Logo isLight={false}/>
                            </div>
                            <div className={styles.cell}>
                                <Menu
                                    active={active}
                                    setActive={setActive}
                                />
                            </div>
                            <div className={styles.cell}>
                                <Lang
                                    lang={lang}
                                    setLang={setLang}
                                />
                            </div>
                            <div className={styles.cell}>
                                {
                                    access
                                    ?
                                        <Account/>
                                    :
                                        <div>
                                            <Link
                                                url={'/login'}
                                                text={translate('menu_link_15')}
                                            />
                                        </div>
                                }
                            </div>
                            <div className={styles.cell}>
                                <div
                                    className={classes(styles.toggle, active && styles.active)}
                                    onClick={() => setActive(!active)}
                                >
                                    <div />
                                    <div />
                                    <div />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                access &&
                <div className={styles.bottom}>
                    <div className="container-fluid">
                        <div className="container">
                            <div className={styles.wrapper}>
                                {
                                    path[getRole()].map((item, idx) =>
                                        <div
                                            key={idx}
                                            className={styles.item}
                                        >
                                            {
                                                item.count &&
                                                team.length > 0 &&
                                                <div className={styles.count}>
                                                    {team.length}
                                                </div>
                                            }

                                            <NavLink
                                                to={item.url}
                                                className={styles.link}
                                                activeClassName={styles.active}
                                            >
                                                {translate(item.text)}
                                            </NavLink>
                                        </div>
                                    )
                                }
                                <NavLink
                                    to={'/'}
                                    className={styles.link}
                                    onClick={logout}
                                >
                                    {translate('menu_link_14')}
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </nav>
    );
}

export default Nav;
