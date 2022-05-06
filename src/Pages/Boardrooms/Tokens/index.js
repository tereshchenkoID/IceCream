import React from "react";
import classes from "classnames";

import styles from './index.module.scss';

import Card from "./Card";

import Tooltip from "../../../Components/Tooltip";
import Info from "../../../Components/Info";
import Button from "../../../Components/Button";

const Tokens = () => {
    return (
        <section className={classes("section", styles.section)}>
            <div className={classes("container-fluid", styles.fluid)}>
                <div className={classes("container", styles.container)}>
                    <div className={classes("row", styles.row)}>
                        <div className={classes("col", "col-12", "col-padding-vertical", styles.col)}>
                            <div className={styles.info}>
                                <Info text={'Stacked STRAWs can only be withdrawn after 6 epochs since deposit.'}/>
                            </div>
                        </div>
                        <div className={classes("col", "col-12", "col-md-6", "col-padding-vertical", styles.col)}>
                            <div className={styles.tooltip}>
                                <Tooltip text={'Provided liquidity in the Farms is contributed to the general economy of the protocol. The farms will emit rewards in the form of the share-token. The share token has a limited supply and yielding utility in the boardroom, which makes it very valuable.'}/>
                            </div>
                            <Card
                                url={'https://icecreamfinance.app/static/media/NEWCREAM.96bb4b5b.png'}
                                title={'FUDGE EARNED'}
                                buttonPlaceholder={'Claim Reward'}
                            />
                        </div>
                        <div className={classes("col", "col-12", "col-md-6", "col-padding-vertical", styles.col)}>
                            <div className={styles.tooltip}>
                                <Tooltip text={'Provided liquidity in the Farms is contributed to the general economy of the protocol. The farms will emit rewards in the form of the share-token. The share token has a limited supply and yielding utility in the boardroom, which makes it very valuable.'}/>
                            </div>
                            <Card
                                url={'https://icecreamfinance.app/static/media/NEWCREAM.96bb4b5b.png'}
                                title={'STRAW STAKED'}
                                buttonPlaceholder={'Approve straw'}
                            />
                        </div>
                        <div className={classes("col", "col-12", "col-padding-vertical", styles.col)}>
                            <div className={styles.button}>
                                <Button
                                    type={'link'}
                                    placeholder={'Claim & Withdraw'}
                                    classname={'alt'}
                                    action={null}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Tokens;
