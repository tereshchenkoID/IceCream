import React from "react";
import {ReactTitle} from 'react-meta-tags';

import Footer from "../../Layouts/Footer";
import JoinUs from "../../Modules/JoinUs";
import Description from "../../Modules/Description";
import Numbers from "../../Modules/Numbers";
import Tokens from "./Tokens";

// import styles from './index.module.scss';

const Bonds = () => {
    const numbers = [
        {
            title: "Convert Tokens",
            text: "Convert your peg-token at a 1:1 ratio for the bond-token. Bonds will only be available when the protocol is in a deficit phase.",
            icon: 'convert'
        },
        {
            title: "Hold Bond",
            text: "Hold the bond-token until the peg-token is back above the algorithmically pegged value.",
            icon: 'hold'
        },
        {
            title: "Redeem Bonds",
            text: "The CBOND:CREAM ratio will be determined by the peg-token's time weighted average price on the previous epoch.",
            icon: 'redeem'
        }
    ]

    return (
        <>
            <main className={'inner'}>
                <ReactTitle title={'IceCream | Bonds'}/>
                <Description
                    title={'Buy & Redeem Bonds'}
                    text={'Earn premiums upon redemption. Consectetur adipiscing elit, sed do labore et dolore magna aliqua. '}
                    page={'bonds'}
                />
                <Tokens />
                <Numbers
                    title={'How It Works'}
                    description={'Lorem dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                    info={numbers}
                    page={'bonds'}
                />
                <JoinUs
                    isLast={true}
                />
            </main>
            <Footer alt={true}/>
        </>
    );
}

export default Bonds;
