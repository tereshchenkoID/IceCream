import React from "react";
import {useDispatch, useSelector} from "react-redux";

import classes from "classnames";

import {setModalData} from "../../redux/actions/modalActions";

import Button from "../../Components/Button";
import Toggle from "../../Components/Toggle";

import styles from './index.module.scss';

const Description = ({title, text, isButton, isToggle}) => {
    const dispatch = useDispatch();

    const { modal } = useSelector(state => state.modalReducer)

    return (
        <section className={classes("section", styles.section)}>
            <div className={classes("container-fluid", styles.fluid)}>
                <div className={classes("container", styles.container)}>
                    {
                        isToggle &&
                        <div className={styles.toggle}>
                            <Toggle />
                        </div>
                    }
                    <div className={styles.content}>
                        <h2 className={styles.title}>{title}</h2>
                        <p className={styles.text}>{text}</p>
                        {
                            isButton &&
                            <div className={styles.button}>
                                <Button
                                    action={() => {dispatch(setModalData(!modal))} }
                                    type={'button'}
                                    placeholder={'Connect Wallet'}
                                    classname={'alt'}
                                />
                            </div>
                        }
                    </div>
                    {
                        Array(8).fill(null).map((item, idx) =>
                            <div
                                key={idx}
                                className={classes(styles.picture, styles[`picture--${idx}`])}
                            >
                                <img
                                    src={`/img/icecream-${idx}.webp`}
                                    alt={"Ice Cream 1"}
                                    loading={"lazy"}
                                />
                            </div>
                        )
                    }

                    <div className={classes(styles.picture, styles['picture--8'])}>
                        <img
                            src={'/img/icecream-4.webp'}
                            alt={"Ice Cream 8"}
                            loading={"lazy"}
                        />
                    </div>
                    <div className={classes(styles.picture, styles['picture--9'])}>
                        <img
                            src={'/img/icecream-1.webp'}
                            alt={"Ice Cream 9"}
                            loading={"lazy"}
                        />
                    </div>
                    <div className={classes(styles.picture, styles['picture--10'])}>
                        <img
                            src={'/img/icecream-5.webp'}
                            alt={"Ice Cream 10"}
                            loading={"lazy"}
                        />
                    </div>
                    <div className={classes(styles.picture, styles['picture--11'])}>
                        <img
                            src={'/img/icecream-6.webp'}
                            alt={"Ice Cream 11"}
                            loading={"lazy"}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Description;
