import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import classes from 'classnames';

import {setModalData} from "../../redux/actions/modalActions";

import Menu from "./Menu";
import Logo from "../../Components/Logo";
import Button from "../../Components/Button";

import styles from './index.module.scss';

const Nav = () => {
    const dispatch = useDispatch();

    const { modal } = useSelector(state => state.modalReducer)

    const [active, setActive] = useState(false)
    const [sticky, setSticky] = useState('relative');

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);

        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 20 ? setSticky('fixed') : setSticky('relative');
        }
    };

    return (
        <nav className={classes(styles.block, styles[sticky])}>
            <div className="container-fluid">
                <div className="container">
                    <div className={styles.wrapper}>
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
                        <div className={styles.cell}>
                            <Logo />
                        </div>
                        <div className={styles.cell}>
                            <Menu
                                active={active}
                                setActive={setActive}
                            />
                        </div>
                        <div className={styles.cell}>
                            <div className={styles.button}>
                                <Button
                                    action={() => {dispatch(setModalData(!modal))} }
                                    type={'button'}
                                    placeholder={'Connect'}
                                    classname={'additional'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
