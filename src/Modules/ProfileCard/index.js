import React from "react";

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
                        <img
                            src={data.photo ? data.photo : "/img/no-photo.webp"}
                            alt={data.photo ? data.photo : "Empty"}
                            loading={'lazy'}
                        />
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
                    {
                        data.skills &&
                        <div className={styles.skills}>
                            {
                                data.skills.map((category, idx) =>
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
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default ProfileCard;
