import React from "react";
import {ReactTitle} from 'react-meta-tags';

import classes from "classnames";

import JoinUs from "../../Modules/JoinUs";
import Description from "../../Modules/Description";

// import styles from './index.module.scss';

const Bonds = () => {
    return (
        <main>
            <ReactTitle title={'IceCream | Bonds'}/>
            <Description
                title={'Buy & Redeem Bonds'}
                text={'Earn premiums upon redemption. Consectetur adipiscing elit, sed do labore et dolore magna aliqua. '}
                isButton={false}
                isToggle={false}
            />
            <JoinUs
                isLast={true}
            />
        </main>
    );
}

export default Bonds;
