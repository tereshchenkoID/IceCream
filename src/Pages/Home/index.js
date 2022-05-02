import React from "react";
import {ReactTitle} from 'react-meta-tags';

import JoinUs from "../../Modules/JoinUs";
import Team from "../../Modules/Team";
import Community from "../../Modules/Community";
import Numbers from "../../Modules/Numbers";
import Innovative from "../../Modules/Innovative";
import CTA from "../../Modules/CTA";
import Tokens from "../../Modules/Tokens";
import Roadmap from "../../Modules/Roadmap";
import Description from "../../Modules/Description";
import Banner from "../../Modules/Banner";

// import styles from './index.module.scss';

const Main = () => {
    return (
        <main>
            <ReactTitle title={'IceCream | Home'}/>
            <Banner />
            <Description
                title={'Taste The Growth'}
                text={'$CREAM A next-generation algo stable to cure your sweet-tooth on the Avalanche Network. Stake your LP in the Farm to earn CSHARE rewards. Then stake your earned CSHARE in the Boardroom to earn more $CREAM!'}
                isButton={true}
                isToggle={true}
            />
            <Tokens />
            <Numbers />
            <Community />
            <Team />
            <JoinUs />
            <Innovative />
            <Roadmap />
            <CTA />
        </main>
    );
}

export default Main;
