import React, {useState} from "react";
import {useSelector} from "react-redux";

import classes from "classnames";

import {translate} from "../../i18n/translate";

import Breadcrumbs from "../../Components/Breadcrumbs";

import styles from './index.module.scss';

const Settings = () => {
    let { dataCountry } = useSelector(state => state.countryReducer);
    const [dropdown, setDropdown] = useState(false);

    const breadcrumbs = [
        {
            url: "/main",
            text: translate("menu_link_1")
        },
        {
            text: 'Settings'
        }
    ]

    return (
        <div className={styles.block}>
            <div className={classes("container-fluid", styles.fluid)}>
                <div className={classes("container", styles.container)}>
                    <div className={styles.breadcrumbs}>
                        <Breadcrumbs data={breadcrumbs}/>
                    </div>

                    <div className={styles.form}>
                        <div className={styles.head}>
                            <div className={styles.title}>My Account</div>
                        </div>
                        <div className={styles.body}>
                            <div className={classes(styles.cell, styles.sm)}>
                                <div className={styles.wrapper}>
                                    <div className={styles.avatar}>
                                        <input
                                            type="file"
                                            id="avatar"
                                            className={styles.file}
                                        />
                                        <label htmlFor="avatar" className={styles.label}>
                                            <img
                                                src="https://images.kabanchik.ua/cb57d651-4552-4738-8a19-aa781982744b.jpg"
                                                className={styles.img}
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.cell}>
                                <div className={styles.wrapper}>
                                    <div className={styles.text}>First Name</div>
                                    <input
                                        type="text"
                                        className={styles.field}
                                    />
                                </div>
                                <div className={styles.wrapper}>
                                    <div className={styles.text}>Age</div>
                                    <input
                                        type="number"
                                        className={styles.field}
                                    />
                                </div>
                                <div className={styles.wrapper}>
                                    <div className={styles.text}>Nationality</div>
                                    <div className={styles.dropdown}>
                                        <input
                                            type="text"
                                            className={styles.field}
                                            onClick={() => setDropdown(!dropdown)}
                                        />
                                        {
                                            dropdown &&
                                            <div className={styles.countries}>
                                                {
                                                    dataCountry.length > 0 &&
                                                    dataCountry.map((item, idx) =>
                                                        <div
                                                            key={idx}
                                                            className={styles.country}
                                                            onClick={() => setDropdown(!dropdown)}
                                                        >
                                                            {item.name}
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className={styles.cell}>
                                <div className={styles.wrapper}>
                                    <div className={styles.text}>Last Name</div>
                                    <input
                                        type="text"
                                        className={styles.field}
                                    />
                                </div>
                                <div className={styles.wrapper}>
                                    <div className={styles.text}>Gender</div>
                                    <input
                                        type="text"
                                        className={styles.field}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.form}>
                        <div className={styles.head}>
                            <div className={styles.title}>Contact Information</div>
                        </div>
                        <div className={styles.body}>
                            <div className={styles.cell}>
                                <div className={styles.wrapper}>
                                    <div className={styles.text}>Email</div>
                                    <input
                                        type="email"
                                        className={styles.field}
                                    />
                                </div>
                                <div className={styles.wrapper}>
                                    <div className={styles.text}>Country</div>
                                    <input
                                        type="text"
                                        className={styles.field}
                                    />
                                </div>
                            </div>
                            <div className={styles.cell}>
                                <div className={styles.wrapper}>
                                    <div className={styles.text}>Phone</div>
                                    <input
                                        type="text"
                                        className={styles.field}
                                    />
                                </div>
                                <div className={styles.wrapper}>
                                    <div className={styles.text}>City</div>
                                    <input
                                        type="text"
                                        className={styles.field}
                                    />
                                </div>
                            </div>
                            <div className={styles.cell}>
                                <div className={styles.wrapper}>
                                    <div className={styles.text}>Website</div>
                                    <input
                                        type="text"
                                        className={styles.field}
                                    />
                                </div>
                                <div className={styles.wrapper}>
                                    <div className={styles.text}>Address</div>
                                    <input
                                        type="text"
                                        className={styles.field}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.form}>
                        <div className={styles.head}>
                            <div className={styles.title}>My Profile</div>
                        </div>
                        <div className={styles.body}>
                            <div className={styles.cell}>
                                <div className={styles.wrapper}>
                                    <div className={styles.text}>Set your minimal hourly rate</div>
                                    <input
                                        type="number"
                                        className={styles.field}
                                    />
                                </div>
                            </div>
                            <div className={styles.cell}>
                                <div className={styles.wrapper}>
                                    <div className={styles.text}>Skills</div>
                                    <div className={styles.wrap}>
                                        <input
                                            type="text"
                                            className={styles.field}
                                        />
                                        <button className={styles.add}>+</button>
                                    </div>

                                    <div className={styles.list}>
                                        <div className={styles.skill}>
                                            <div className={styles.remove}>
                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 496.096 496.096">
                                                    <path d="M259.41,247.998L493.754,13.654c3.123-3.124,3.123-8.188,0-11.312c-3.124-3.123-8.188-3.123-11.312,0L248.098,236.686 L13.754,2.342C10.576-0.727,5.512-0.639,2.442,2.539c-2.994,3.1-2.994,8.015,0,11.115l234.344,234.344L2.442,482.342 c-3.178,3.07-3.266,8.134-0.196,11.312s8.134,3.266,11.312,0.196c0.067-0.064,0.132-0.13,0.196-0.196L248.098,259.31 l234.344,234.344c3.178,3.07,8.242,2.982,11.312-0.196c2.995-3.1,2.995-8.016,0-11.116L259.41,247.998z"/>
                                                </svg>
                                            </div>
                                            Plumber
                                        </div>
                                        <div className={styles.skill}>
                                            <div className={styles.remove}>
                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 496.096 496.096">
                                                    <path d="M259.41,247.998L493.754,13.654c3.123-3.124,3.123-8.188,0-11.312c-3.124-3.123-8.188-3.123-11.312,0L248.098,236.686 L13.754,2.342C10.576-0.727,5.512-0.639,2.442,2.539c-2.994,3.1-2.994,8.015,0,11.115l234.344,234.344L2.442,482.342 c-3.178,3.07-3.266,8.134-0.196,11.312s8.134,3.266,11.312,0.196c0.067-0.064,0.132-0.13,0.196-0.196L248.098,259.31 l234.344,234.344c3.178,3.07,8.242,2.982,11.312-0.196c2.995-3.1,2.995-8.016,0-11.116L259.41,247.998z"/>
                                                </svg>
                                            </div>
                                            Carpenter
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.body}>
                            <div className={styles.cell}>
                                <div className={styles.wrapper}>
                                    <div className={styles.text}>Introduce Yourself</div>
                                    <textarea className={styles.textarea}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.form}>
                        <div className={styles.head}>
                            <div className={styles.title}>Password & Security</div>
                        </div>
                        <div className={styles.body}>
                            <div className={styles.cell}>
                                <div className={styles.wrapper}>
                                    <div className={styles.text}>Current Password</div>
                                    <input
                                        type="password"
                                        className={styles.field}
                                    />
                                </div>
                            </div>
                            <div className={styles.cell}>
                                <div className={styles.wrapper}>
                                    <div className={styles.text}>New Password</div>
                                    <input
                                        type="password"
                                        className={styles.field}
                                    />
                                </div>
                            </div>
                            <div className={styles.cell}>
                                <div className={styles.wrapper}>
                                    <div className={styles.text}>Repeat New Password</div>
                                    <input
                                        type="password"
                                        className={styles.field}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.wrapper}>
                        <button className={styles.button}>Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;
