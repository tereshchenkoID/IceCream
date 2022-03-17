import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

import {setUserData} from "../../redux/actions/userActions";

import {translate} from "../../i18n/translate";

import classes from 'classnames';

import Menu from "./Menu";
import Lang from "./Lang";
import Account from "./Account";
import Logo from "../../Components/Logo";
import Link from "../../Components/Link";

import styles from './index.module.scss';

const Nav = ({lang, setLang}) => {
    const dispatch = useDispatch();
    const dataUser = useSelector(state => state.userReducer);

    const [active, setActive] = useState(false)

    const logout = () => {
        dispatch(setUserData(0))
        localStorage.removeItem('user_id')
        localStorage.removeItem('user_role')
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
                                    dataUser.user === 0 ?
                                        <div>
                                            <Link
                                                url={'/login'}
                                                text={translate('menu_link_15')}
                                            />
                                        </div>
                                    :
                                        <Account/>
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
                dataUser.user !== 0 &&
                <div className={styles.bottom}>
                    <div className="container-fluid">
                        <div className="container">
                            <div className={styles.wrapper}>
                                <div className={styles.item}>
                                    <NavLink
                                        to={'/my/personal'}
                                        className={styles.link}
                                        activeClassName={styles.active}
                                    >
                                        {translate("menu_link_11")}
                                    </NavLink>
                                </div>
                                <div className={styles.item}>
                                    <NavLink
                                        to={'/my/applicant'}
                                        className={styles.link}
                                        activeClassName={styles.active}
                                    >
                                        {translate("menu_link_12")}
                                    </NavLink>
                                </div>
                                <div className={styles.item}>
                                    <NavLink
                                        to={'/my/contact'}
                                        className={styles.link}
                                        activeClassName={styles.active}
                                    >
                                        {translate("menu_link_16")}
                                    </NavLink>
                                </div>
                                <div className={styles.item}>
                                    <NavLink
                                        to={'/my/settings'}
                                        className={styles.link}
                                        activeClassName={styles.active}
                                    >
                                        {translate("menu_link_13")}
                                    </NavLink>
                                </div>
                                <div className={styles.item}>
                                    <NavLink
                                        to={'/'}
                                        className={styles.link}
                                        onClick={() => {
                                            logout()
                                        }}
                                    >
                                        {translate("menu_link_14")}
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </nav>
    );
}

export default Nav;
