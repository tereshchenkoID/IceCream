import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {ReactTitle} from "react-meta-tags";

import classes from "classnames";

import {setModalData} from "../../redux/actions/modalActions";

import Button from "../../Components/Button";

import styles from './index.module.scss';

const Unlock = () => {
    const dispatch = useDispatch();

    const { modal } = useSelector(state => state.modalReducer)

    return (
        <main className={styles.main}>
            <ReactTitle title={'IceCream | Unlock'}/>

            <section className={classes("section", styles.section)}>
                <div className={classes("container-fluid", styles.fluid)}>
                    <div className={classes("container", styles.container)}>
                        <div className={styles.pictures}>
                            <div className={styles.picture}>
                                <img
                                    src={'/img/icecream-8.webp'}
                                    alt={"Ice Cream 8"}
                                    loading={"lazy"}
                                />
                            </div>
                            <div className={styles.picture}>
                                <img
                                    src={'/img/icecream-9.webp'}
                                    alt={"Ice Cream 9"}
                                    loading={"lazy"}
                                />
                            </div>
                        </div>
                        <div className={styles.button}>
                            <Button
                                action={() => {dispatch(setModalData(!modal))} }
                                type={'button'}
                                placeholder={'Connect Wallet'}
                                classname={'primary'}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Unlock;
