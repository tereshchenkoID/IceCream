import React from "react";
import classes from "classnames";

import styles from './index.module.scss';

import Card from "./Card";

const Tokens = () => {
    return (
        <section className={classes("section", styles.section)}>
            <div className={classes("container-fluid", styles.fluid)}>
                <div className={classes("container", styles.container)}>
                    <div className={styles.list}>
                        <div className={styles.item}>
                            <Card
                                url={'https://icecreamfinance.app/static/media/NEWCREAM.96bb4b5b.png'}
                                title={'CREAM'}
                                currentPrice={'9.63'}
                                purchaseUrl={'https://traderjoexyz.com/trade?outputCurrency=0xAE21d31a6494829a9E4B2B291F4984AAE8121757#/'}
                                chartUrl={'https://dexscreener.com/avalanche/0x00c87ce7188f7652d0c0940274cec5db62f1e825'}
                            />
                        </div>
                        <div className={styles.item}>
                            <Card
                                url={'https://icecreamfinance.app/static/media/NEWSHARE.e0835eb9.png'}
                                title={'CSHARE'}
                                currentPrice={'1.77'}
                                purchaseUrl={'https://traderjoexyz.com/trade?outputCurrency=0x155f794b56353533E0AfBF76e1B1FC57DFAd5Bd7#/'}
                                chartUrl={'https://dexscreener.com/avalanche/0xbd61dfad83fc19960476abca1324ffd798234c66'}
                            />
                        </div>
                        <div className={styles.item}>
                            <Card
                                url={null}
                                title={'CBOND'}
                                currentPrice={'8.77'}
                                purchaseUrl={null}
                                chartUrl={null}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Tokens;
