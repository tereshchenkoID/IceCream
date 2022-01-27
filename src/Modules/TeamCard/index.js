import React from "react";

import styles from './index.module.scss';

import {translate} from "../../i18n/translate";


const TeamCard = ({id, name}) => {
    return (
        <div className={styles.block}>
            <div className={styles.background}>
                <img
                    src={`/img/decor/${id}.webp`}
                    alt={name}
                    loading={"lazy"}
                />
            </div>
            <div className={styles.photo}>
                <picture>
                    <source srcSet={`/img/team/1x/${id}.webp 1x, /img/team/2x/${id}@2x.webp 2x`}/>
                    <img
                        src={`/img/team/1x/${id}.webp`}
                        alt={name}
                        loading={"lazy"}
                    />
                </picture>
            </div>
            <div className={styles.content}>
                <h5 className={styles.title}>{name}</h5>
                <p className={styles.text}>{translate(`team_${id}_text`)}</p>
                <p className={styles.quotes}>"{translate(`team_${id}_slogan`)}"</p>
            </div>
        </div>
    )
}

export default TeamCard;
