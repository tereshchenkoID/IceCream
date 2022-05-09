import React from "react";
import {ReactTitle} from 'react-meta-tags';

import JoinUs from "../../Modules/JoinUs";
import Numbers from "../../Modules/Numbers";
import Description from "../../Modules/Description";

import Team from "./Team";
import Community from "./Community";
import Innovative from "./Innovative";
import Tokens from "./Tokens";
import Roadmap from "./Roadmap";
import Banner from "./Banner";
import CTA from "./CTA";
import Footer from "../../Layouts/Footer";

// import styles from './index.module.scss';

const Main = () => {
    const numbers = [
        {
            title: "3.1 Daily Volume",
            text: "Quantifying the buying and selling of the last 24 hours."
        },
        {
            title: "XX.XX Treasury Value",
            text: "Accumulation of protocol owned liquitity and protocol generated revenue."
        },
        {
            title: "XX.XX Transactions",
            text: "Total amount of transactions accumulated to date."
        }
    ]

    return (
        <>
            <main>
                <ReactTitle title={'IceCream | Home'}/>
                <Banner />
                <Description
                    title={'Taste The Growth'}
                    text={'$CREAM A next-generation algo stable to cure your sweet-tooth on the Avalanche Network. Stake your LP in the Farm to earn CSHARE rewards. Then stake your earned CSHARE in the Boardroom to earn more $CREAM!'}
                    page={'home'}
                />
                <Tokens />
                <Numbers
                    title={'Numbers Speak for Themselves'}
                    description={'An ever-growing ecosystem built with success for our investors in mind. Check out our launch statistics since January that showscases our trajectory.'}
                    info={numbers}
                    page={'home'}
                />
                <Community />
                <Team />
                <JoinUs />
                <Innovative />
                <Roadmap />
                <CTA />
            </main>
            <Footer />
        </>
    );
}

export default Main;
