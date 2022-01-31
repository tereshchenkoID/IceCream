import React from "react";
import {NavLink} from "react-router-dom";

import {translate} from "../../i18n/translate";

import getAge from "../../helpers/getAge";
import convertData from "../../helpers/convertData";

import Link from "../../Components/Link";
import Favourite from "../../Components/Favourite";
import Team from "../../Components/Team";

import styles from './index.module.scss';

const ProfileCard = ({
  data,
  lang,
  setting,
  favArray,
  setFavArray,
  teamArray,
  setTeamArray,
}) => {

    return (
        <div className={styles.block}>
            {
                <div className={styles.wrapper} >
                    <div className={styles.photo}>
                        {
                            data.photo ?
                            <img
                                src={data.photo}
                                alt={data.photo}
                                loading={'lazy'}
                            />
                                :
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M15.0778418,12.9406987 L18.5345074,14.5119103 C19.4269931,14.9175857 20,15.8074678 20,16.7878265 L20,17.5 C20,18.8807119 18.8807119,20 17.5,20 L6.5,20 C5.11928813,20 4,18.8807119 4,17.5 L4,16.7878265 C4,15.8074678 4.57300693,14.9175857 5.46549264,14.5119103 L8.92215823,12.9406987 C7.75209123,12.0255364 7,10.6005984 7,9 C7,6.23857625 9.23857625,4 12,4 C14.7614237,4 17,6.23857625 17,9 C17,10.6005984 16.2479088,12.0255364 15.0778418,12.9406987 L15.0778418,12.9406987 Z M9.96126583,13.5668358 L5.87929558,15.4222768 C5.34380416,15.665682 5,16.1996113 5,16.7878265 L5,17.5 C5,18.3284271 5.67157288,19 6.5,19 L17.5,19 C18.3284271,19 19,18.3284271 19,17.5 L19,16.7878265 C19,16.1996113 18.6561958,15.665682 18.1207044,15.4222768 L14.0387342,13.5668358 C13.4161054,13.8452135 12.7261289,14 12,14 C11.2738711,14 10.5838946,13.8452135 9.96126583,13.5668358 L9.96126583,13.5668358 Z M12,13 C14.209139,13 16,11.209139 16,9 C16,6.790861 14.209139,5 12,5 C9.790861,5 8,6.790861 8,9 C8,11.209139 9.790861,13 12,13 Z"/>
                            </svg>
                        }
                    </div>
                    <div className={styles.content}>
                        <div className={styles.favourite}>
                            <Favourite
                                id={data.id}
                                favArray={favArray}
                                setFavArray={setFavArray}
                            />
                        </div>

                        <div className={styles.wrap}>
                            <div className={styles.head}>
                                <div className={styles.name}>{data.surname} {data.name}</div>
                            </div>

                            <div className={styles.body}>
                                <div className={styles.info}>
                                    <div className={styles.cell}>
                                        <p className={styles.label}>{translate('card_age')}: </p>
                                        <p className={styles.value}>{getAge(data.age)}</p>
                                    </div>
                                    <div className={styles.cell}>
                                        <p className={styles.label}>{translate('card_gender')}: </p>
                                        <p className={styles.value}>{setting.gender[data.gender][lang]}</p>
                                    </div>
                                    <div className={styles.cell}>
                                        <p className={styles.label}>{translate('card_access')}: </p>
                                        <p className={styles.value}>{setting.access[data.eu_allowed_person][lang]}</p>
                                    </div>
                                    <div className={styles.cell}>
                                        <p className={styles.label}>{translate('card_vaccination')}: </p>
                                        <p className={styles.value}>{setting.vaccination[data.vaccinated][lang]}</p>
                                    </div>
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.cell}>
                                        <p className={styles.label}>{translate('card_available')}: </p>
                                        <p className={styles.value}>{convertData(data.available[0])} - {convertData(data.available[1])}</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.footer}>
                                <div className={styles.button}>
                                    <Team
                                        id={data.id}
                                        teamArray={teamArray}
                                        setTeamArray={setTeamArray}
                                    />
                                </div>
                                <div className={styles.button}>
                                    <Link
                                        url={`/profile/${data.id}`}
                                        text={translate('card_button_profile')}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.skills}>
                        {
                            data.skills &&
                            data.skills.slice(0, 2).map((category, idx) =>
                                <div key={idx}>
                                    <p className={styles.category}>{setting.job[category.id][lang]}</p>
                                    {
                                        category.list.map((subcategory, idx) =>
                                            subcategory < setting.job[category.id].list.length &&
                                            <p key={idx} className={styles.subcategory}>{setting.job[category.id].list[subcategory][lang]}</p>
                                        )
                                    }
                                </div>
                            )
                        }
                        {
                            (data.skills.length > 2) &&
                            <>
                                <div>...</div>
                                <NavLink
                                    className={styles.link}
                                    to={`/profile/${data.id}`}
                                >
                                    {translate('card_more')}
                                </NavLink>
                            </>
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default ProfileCard;
