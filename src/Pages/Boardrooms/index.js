import React from "react";
import {ReactTitle} from 'react-meta-tags';

import classes from "classnames";

import JoinUs from "../../Modules/JoinUs";
import Description from "../../Modules/Description";

// import styles from './index.module.scss';

const Boardrooms = () => {
    return (
        <main>
            <ReactTitle title={'IceCream | Boardroom'}/>
            <Description
                title={'Boardroom'}
                text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do labore et dolore magna dot  lorem aliqua. '}
                isButton={false}
                isToggle={false}
            />
            <JoinUs />
        </main>
    );
}

export default Boardrooms;
