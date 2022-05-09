import React from "react";
import {ReactTitle} from 'react-meta-tags';

import Footer from "../../Layouts/Footer";
import JoinUs from "../../Modules/JoinUs";
import Description from "../../Modules/Description";
import Numbers from "../../Modules/Numbers";
import Tokens from "./Tokens";
import Banners from "./Banners";

// import styles from './index.module.scss';

const Boardrooms = () => {
    const numbers = [
        {
            title: "Purchase or Claim",
            text: "PURCHASE OR CLAIM. Either purchase share-tokens ($CSHARE) from traderjoe or claim rewards from the farms."
        },
        {
            title: "Deposit Tokens",
            text: "Deposit the tokens into the boardroom above on the card to the right. There will be a 36 hour lock-up period prior to being able withdraw the provided share token."
        },
        {
            title: "Claim Rewards",
            text: "Collect the emissions in the form of the peg-token. There will be a 18 hour time period before being able to redeem rewards."
        }
    ]

    return (
        <>
            <main className={'inner'}>
                <ReactTitle title={'IceCream | Boardroom'}/>
                <Description
                    title={'Boardroom'}
                    text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do labore et dolore magna dot  lorem aliqua. '}
                    page={'boardrooms'}
                />
                <Banners />
                <Tokens />
                <Numbers
                    title={'How It Works'}
                    description={'The boardroom utilizes the share-token as a single stake in the protocol to emit the governance (peg) token at the scheduled expansion rate that is dependent on the circulating supply.'}
                    info={numbers}
                    page={'boardrooms'}
                />
                <JoinUs
                    isLast={true}
                />
            </main>
            <Footer alt={true}/>
        </>
    );
}

export default Boardrooms;
