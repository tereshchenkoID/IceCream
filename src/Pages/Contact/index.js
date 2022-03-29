import React from "react";
import {ReactTitle} from 'react-meta-tags';
import classes from "classnames";

import {translate, translateString} from "../../i18n/translate";

import Form from "../../Modules/Form";
import Breadcrumbs from "../../Components/Breadcrumbs";

const Main = () => {
    const breadcrumbs = [
        {
            url: "/",
            text: translate("menu_link_1")
        },
        {
            text: translate("menu_link_8")
        }
    ]

    return (
        <main>
            <ReactTitle title={`Global Workers | ${translateString('menu_link_8')}`} />
            <section className={classes("section", "alt")}>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className={classes("col", "col-12")}>
                                <Breadcrumbs data={breadcrumbs}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container-fluid">
                    <div className="container">
                        <Form />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Main;
