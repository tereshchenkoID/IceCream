import React from "react";
import {ReactTitle} from 'react-meta-tags';

import classes from "classnames";

import JoinUs from "../../Modules/JoinUs";
import Description from "../../Modules/Description";

// import styles from './index.module.scss';

const Farm = () => {
    return (
        <main>
            <ReactTitle title={'IceCream | Farm'}/>
            <Description
                title={'CSHARE Reward Farms'}
                text={'Earn STRAW by staking LP. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do labore et dolore magna aliqua.'}
                isButton={false}
                isToggle={false}
            />
            <JoinUs
                isLast={true}
            />
        </main>
    );
}

export default Farm;
