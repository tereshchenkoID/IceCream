import React from "react";
import {ReactTitle} from 'react-meta-tags';

import Footer from "../../Layouts/Footer";
import JoinUs from "../../Modules/JoinUs";
import Description from "../../Modules/Description";
import Numbers from "../../Modules/Numbers";
import Tokens from "./Tokens";

// import styles from './index.module.scss';

const Farm = () => {
    const numbers = [
        {
            title: "Purchase",
            text: "Purchase tokens neccessary to construct the desired liquidity pair."
        },
        {
            title: "Create",
            text: "Create a liquidity pair on trader joe. A liquidity pair is 50% value of each token."
        },
        {
            title: "Deposit",
            text: "Deposit liquidity pair token into the desired farm on the protocol."
        }
    ]

    return (
        <>
            <main className={'inner'}>
                <ReactTitle title={'IceCream | Farm'}/>
                <Description
                    title={'CSHARE Reward Farms'}
                    text={'Earn STRAW by staking LP. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do labore et dolore magna aliqua.'}
                    page={'farm'}
                />
                <Tokens />
                <Numbers
                    title={'How It Works'}
                    description={'Provided liquidity in the Farms is contributed to the general economy of the protocol. The farms will emit rewards in the form of the share-token. The share token has a limited supply and yielding utility in the boardroom, which makes it very valuable.'}
                    info={numbers}
                    page={'farm'}
                />
                <JoinUs
                    isLast={true}
                />
            </main>
            <Footer alt={true}/>
        </>
    );
}

export default Farm;
