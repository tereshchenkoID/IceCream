import React, {useState} from "react";
import { useSelector } from 'react-redux'
import {ReactTitle} from 'react-meta-tags';

import classes from "classnames";

import {translate, translateString} from "../../i18n/translate";

import styles from './index.module.scss';

import CategoryCard from './CaregoryCard';
import Title from '../../Components/Title';
import Header from "../../Layouts/Header";

const Main = () => {
    let { dataSetting } = useSelector(state => state.settingReducer);

    const [lang] = useState(translateString('lang'));

    return (
        <>
            <ReactTitle title="Global Workers | Home" />
            <Header lang={lang} />
            {
                dataSetting &&
                dataSetting.job &&
                <main>
                    <section className="section">
                        <div className="container-fluid">
                            <div className="container">
                                <div className="row">
                                    <div className={classes("col", "col-12")}>
                                        <Title
                                            text={translate('main_title_categories')}
                                            url="/search/0"
                                            link={translate('title_view_all')}
                                        />
                                    </div>
                                    {
                                        dataSetting.job.slice(1, dataSetting.job.length).map((item, idx) =>
                                            <div key={idx} className={classes("col", "col-12", "col-sm-6", "col-md-4", "col-lg-3", "col-padding-vertical")}>
                                                <div className={styles.category}>
                                                    <CategoryCard data={item} lang={lang}/>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            }
        </>
    );
}

export default Main;
