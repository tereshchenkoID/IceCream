import React, {useState} from "react";
import { useSelector } from 'react-redux'

import classes from "classnames";

import {translate, translateString} from "../../i18n/translate";

import Title from '../../Components/Title';
import Form from '../../Modules/Form';
import CategoryCard from '../../Modules/CaregoryCard';
import Header from '../../Layouts/Header';

import styles from './index.module.scss';

const Main = () => {
    let { dataSetting } = useSelector(state => state.settingReducer);

    const [lang] = useState(translateString('lang'));

    return (
        <>
            {
                dataSetting &&
                dataSetting.job &&
                <>
                    <Header/>
                    <main>
                        <section className="section">
                            <div className="container-fluid">
                                <div className="container">
                                    <div className="row">
                                        <div className={classes("col", "col-12")}>
                                            <Title
                                                url="/search/0"
                                                text={translate('main_title_categories')}
                                                link={translate('title-view-all')}
                                            />
                                        </div>
                                        {
                                            dataSetting.job.slice(1, dataSetting.job.length).map((item, idx) =>
                                                <div
                                                    key={idx}
                                                    className={classes("col", "col-12", "col-sm-6", "col-md-4", "col-lg-3", "col-padding-vertical")}
                                                >
                                                    <div className={styles.category}>
                                                         <CategoryCard
                                                            data={item}
                                                            lang={lang}
                                                        />
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className={classes("section", "dark")}>
                            <div className="container-fluid">
                                <div className="container">
                                    <Form />
                                </div>
                            </div>
                        </section>
                    </main>
                </>
            }
        </>
    );
}

export default Main;
