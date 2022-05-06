import React from "react";
import classes from "classnames";

import styles from './index.module.scss';

import Card from "./Card";
import Banner from "./Banner";

import Tooltip from "../../../Components/Tooltip";
import Info from "../../../Components/Info";

const Tokens = () => {
    return (
        <section className={classes("section", styles.section)}>
            <div className={classes("container-fluid", styles.fluid)}>
                <div className={classes("container", styles.container)}>
                    <div className={classes("row", styles.row)}>
                        <div className={classes("col", "col-12", "col-md-4", styles.col)}>
                            <div className={styles.tooltip}>
                                <Tooltip text={'Provided liquidity in the Farms is contributed to the general economy of the protocol. The farms will emit rewards in the form of the share-token. The share token has a limited supply and yielding utility in the boardroom, which makes it very valuable.'}/>
                            </div>
                            <Card
                                url={'https://icecreamfinance.app/static/media/NEWCREAM.96bb4b5b.png'}
                                urlAlt={'https://icecreamfinance.app/static/media/NEWCREAM.96bb4b5b.png'}
                                title={'Purchase CARAML'}
                            />
                        </div>
                        <div className={classes("col", "col-12", "col-md-4", styles.col)}>
                            <div className={classes("row", styles.row)}>
                                <div className={classes("col", "col-12", styles.col)}>
                                    <div className={styles.tooltip}>
                                        <Tooltip text={'Provided liquidity in the Farms is contributed to the general economy of the protocol. The farms will emit rewards in the form of the share-token. The share token has a limited supply and yielding utility in the boardroom, which makes it very valuable.'}/>
                                    </div>
                                    <Banner
                                        text={"FUDGE = 1.0645 DAI"}
                                        value={"Last-Epoch TWAP price"}
                                    />
                                </div>
                                <div className={classes("col", "col-12", styles.col)}>
                                    <div className={styles.tooltip}>
                                        <Tooltip text={'Provided liquidity in the Farms is contributed to the general economy of the protocol. The farms will emit rewards in the form of the share-token. The share token has a limited supply and yielding utility in the boardroom, which makes it very valuable.'}/>
                                    </div>
                                    <Banner
                                        text={"CARAML = 1.03 DAI"}
                                        value={"Curent Price: (FUDGE)^2"}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={classes("col", "col-12", "col-md-4", styles.col)}>
                            <div className={styles.tooltip}>
                                <Tooltip text={'Provided liquidity in the Farms is contributed to the general economy of the protocol. The farms will emit rewards in the form of the share-token. The share token has a limited supply and yielding utility in the boardroom, which makes it very valuable.'}/>
                            </div>
                            <Card
                                url={'https://icecreamfinance.app/static/media/NEWCREAM.96bb4b5b.png'}
                                urlAlt={'https://icecreamfinance.app/static/media/NEWCREAM.96bb4b5b.png'}
                                title={'Purchase CARAML'}
                            />
                        </div>
                        <div className={classes("col", "col-12", "col-padding-vertical", styles.col)}>
                            <div className={styles.info}>
                                <Info text={'Claiming below 1.1 peg will not receive a redemption bonus. Claim wisely!'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Tokens;
