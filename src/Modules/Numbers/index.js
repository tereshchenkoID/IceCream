import React from "react";
import classes from "classnames";

import styles from './index.module.scss';

const Numbers = () => {
    return (
        <section className={classes("section", styles.section)}>
            <div className={classes("container-fluid", styles.fluid)}>
                <div className={classes("container", styles.container)}>
                    <div className={classes("row", styles.row)}>
                        <div className={classes("col", "col-12", "col-padding-vertical", styles.col)}>
                            <div className={styles.group}>
                                <h2 className={styles.title}>Numbers Speak for Themselves</h2>
                                <p className={styles.text}>An ever-growing ecosystem built with success for our investors in mind. Check out our launch statistics since January that showscases our trajectory.</p>
                            </div>
                        </div>
                        <div className={classes("col", "col-12", "col-md-6", "col-lg-4", "col-padding-vertical", styles.col)}>
                            <div className={styles.icon}>
                                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.5833 22.1667H24.5V12.8333H28.5833C32.1213 12.8333 35 9.95458 35 6.41667C35 2.87875 32.1213 0 28.5833 0C25.0454 0 22.1667 2.87875 22.1667 6.41667V10.5H12.8333V6.41667C12.8333 2.87875 9.95458 0 6.41667 0C2.87875 0 0 2.87875 0 6.41667C0 9.95458 2.87875 12.8333 6.41667 12.8333H10.5V22.1667H6.41667C2.87875 22.1667 0 25.0454 0 28.5833C0 32.1213 2.87875 35 6.41667 35C9.95458 35 12.8333 32.1213 12.8333 28.5833V24.5H22.1667V28.5833C22.1667 32.1213 25.0454 35 28.5833 35C32.1213 35 35 32.1213 35 28.5833C35 25.0454 32.1213 22.1667 28.5833 22.1667ZM24.5 6.41667C24.5 4.16558 26.3317 2.33333 28.5833 2.33333C30.835 2.33333 32.6667 4.16558 32.6667 6.41667C32.6667 8.66775 30.835 10.5 28.5833 10.5H24.5V6.41667ZM6.41667 10.5C4.165 10.5 2.33333 8.66775 2.33333 6.41667C2.33333 4.16558 4.165 2.33333 6.41667 2.33333C8.66833 2.33333 10.5 4.16558 10.5 6.41667V10.5H6.41667ZM10.5 28.5833C10.5 30.8344 8.66833 32.6667 6.41667 32.6667C4.165 32.6667 2.33333 30.8344 2.33333 28.5833C2.33333 26.3322 4.165 24.5 6.41667 24.5H10.5V28.5833ZM12.8333 22.1667V12.8333H22.1667V22.1667H12.8333ZM28.5833 32.6667C26.3317 32.6667 24.5 30.8344 24.5 28.5833V24.5H28.5833C30.835 24.5 32.6667 26.3322 32.6667 28.5833C32.6667 30.8344 30.835 32.6667 28.5833 32.6667Z" fill="#FDAD3E"/>
                                </svg>
                            </div>
                            <h5 className={styles.subtitle}>3.1 Daily Volume</h5>
                            <p className={styles.text}>Quantifying the buying and selling of the last 24 hours.</p>
                        </div>
                        <div className={classes("col", "col-12", "col-md-6", "col-lg-4", "col-padding-vertical", styles.col)}>
                            <div className={styles.icon}>
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M38.6629 37.7438H6.37539C5.52332 37.7438 4.70585 37.4066 4.10158 36.8059C3.4973 36.2051 3.15534 35.3895 3.15039 34.5375V14.2875C3.15534 12.4242 3.89773 10.6387 5.21527 9.32112C6.53282 8.00358 8.31836 7.26119 10.1816 7.25626H34.8567C36.7215 7.25626 38.5099 7.99703 39.8284 9.31564C41.1471 10.6343 41.8879 12.4227 41.8879 14.2875V34.5375C41.883 35.3895 41.541 36.2051 40.9367 36.8059C40.3324 37.4066 39.5149 37.7438 38.6629 37.7438ZM10.1816 10.0688C9.06277 10.0688 7.98971 10.5132 7.19853 11.3044C6.40738 12.0956 5.96289 13.1686 5.96289 14.2875V34.5375C5.96283 34.5908 5.97362 34.6436 5.99456 34.6926C6.0155 34.7417 6.0462 34.7859 6.08477 34.8227C6.12333 34.8596 6.16899 34.8881 6.21894 34.9069C6.26891 34.9254 6.32214 34.9337 6.37539 34.9313H38.6629C38.7162 34.9337 38.7694 34.9254 38.8193 34.9069C38.8693 34.8881 38.9149 34.8596 38.9535 34.8227C38.9922 34.7859 39.0227 34.7417 39.0437 34.6926C39.0647 34.6436 39.0754 34.5908 39.0754 34.5375V14.2875C39.0754 13.1686 38.6308 12.0956 37.8398 11.3044C37.0485 10.5132 35.9755 10.0688 34.8567 10.0688H10.1816Z" fill="#FDAC3F"/>
                                    <path d="M22.4996 29.1375C21.1877 29.1338 19.9061 28.7413 18.8171 28.0099C17.7281 27.2783 16.8802 26.2403 16.3807 25.0271C15.8812 23.814 15.7525 22.4799 16.0107 21.1937C16.2689 19.9073 16.9025 18.7264 17.8316 17.8C18.7607 16.8736 19.9432 16.2433 21.2304 15.9887C22.5174 15.7341 23.8509 15.8667 25.0627 16.3696C26.2745 16.8725 27.3101 17.7233 28.0385 18.8143C28.767 19.9056 29.1559 21.1881 29.1559 22.5C29.151 24.2621 28.4475 25.9504 27.1997 27.1946C25.9518 28.4389 24.2617 29.1375 22.4996 29.1375ZM22.4996 18.75C21.7579 18.75 21.033 18.9699 20.4163 19.3821C19.7996 19.794 19.3189 20.3798 19.035 21.0649C18.7513 21.7502 18.677 22.5041 18.8216 23.2316C18.9664 23.9591 19.3235 24.6272 19.848 25.1516C20.3724 25.6761 21.0407 26.0333 21.768 26.178C22.4955 26.3228 23.2494 26.2483 23.9347 25.9646C24.6199 25.6808 25.2056 25.2 25.6175 24.5833C26.0297 23.9668 26.2496 23.2418 26.2496 22.5C26.2496 21.5055 25.8545 20.5517 25.1512 19.8484C24.4479 19.1451 23.4941 18.75 22.4996 18.75Z" fill="#FDAC3F"/>
                                    <path d="M40.4627 23.9062H27.7314C27.3585 23.9062 27.0008 23.7581 26.7369 23.4943C26.4733 23.2307 26.3252 22.8729 26.3252 22.5C26.3252 22.1271 26.4733 21.7693 26.7369 21.5057C27.0008 21.2419 27.3585 21.0938 27.7314 21.0938H40.4627C40.8356 21.0938 41.1934 21.2419 41.457 21.5057C41.7208 21.7693 41.8689 22.1271 41.8689 22.5C41.8689 22.8729 41.7208 23.2307 41.457 23.4943C41.1934 23.7581 40.8356 23.9062 40.4627 23.9062Z" fill="#FDAC3F"/>
                                    <path d="M17.2879 23.9062H4.55664C4.18368 23.9062 3.82599 23.7581 3.56227 23.4943C3.29855 23.2307 3.15039 22.8729 3.15039 22.5C3.15039 22.1271 3.29855 21.7693 3.56227 21.5057C3.82599 21.2419 4.18368 21.0938 4.55664 21.0938H17.2879C17.6609 21.0938 18.0185 21.2419 18.2823 21.5057C18.546 21.7693 18.6941 22.1271 18.6941 22.5C18.6941 22.8729 18.546 23.2307 18.2823 23.4943C18.0185 23.7581 17.6609 23.9062 17.2879 23.9062Z" fill="#FDAC3F"/>
                                </svg>
                            </div>
                            <h5 className={styles.subtitle}>XX.XX Treasury Value</h5>
                            <p className={styles.text}>Accumulation of protocol owned liquitity and protocol generated revenue.</p>
                        </div>
                        <div className={classes("col", "col-12", "col-md-6", "col-lg-4", "col-padding-vertical", styles.col)}>
                            <div className={styles.icon}>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.75 5.5L30.25 10L5 10L5 12.5L30.25 12.5L25.75 17L27.5 18.75L35 11.25L27.5 3.75L25.75 5.5Z" fill="#FDAD3E" stroke="#FDAD3E" strokeWidth="0.5"/>
                                    <path d="M5 28.75L12.5 36.25L14.25 34.5L9.75 30H35V27.5H9.75L14.25 23L12.5 21.25L5 28.75Z" fill="#FDAD3E" stroke="#FDAD3E" strokeWidth="0.5"/>
                                </svg>
                            </div>
                            <h5 className={styles.subtitle}>XX.XX Transactions</h5>
                            <p className={styles.text}>Total amount of transactions accumulated to date.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Numbers;