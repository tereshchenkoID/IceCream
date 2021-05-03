import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux'

import { loadCategoryData } from '../../../redux/actions/categoryActions';

import { translateString } from "../../../i18n/translate";

import Link from "../../../Components/Link";
import SearchItem from "../SearchItem";

import styles from './index.module.scss';

const Search = ({lang}) => {
    const dispatch = useDispatch();

    let { dataCategory } = useSelector(state => state.categoryReducer);

    const [close, setClose] = useState(false);
    const [query, setQuery] = useState('');
    const [checkboxes, setCheckboxes] = useState([]);

    useEffect(() => {
        dispatch(loadCategoryData());
    }, []);

    const searchLeague = (e) => {
        e.preventDefault();
        setQuery(e.target.value)
        if (e.target.value.length > 2){
            setCheckboxes(dataCategory.filter(c => c.title[lang.substr(0, 2)].toLowerCase().includes(e.target.value.toLowerCase())));

            if (!close) setClose(true);
        }
        else {
            if (close) setClose(false);

            setCheckboxes([]);
        }
    };

    const resetSearch = () => {
        setCheckboxes([]);
        setClose(false);
        setQuery('');
    }

    return (
        <div className={styles.block}>
            <div className={styles.wrapper}>
                <input
                    type="text"
                    value={query}
                    className={styles.input}
                    placeholder={translateString('search_placeholder')}
                    onChange={(e) => searchLeague(e)}
                />
                <div className={styles.link}>
                    <Link
                        url="/search/0"
                        text={translateString('search_button')}
                    />
                </div>
                {
                    close &&
                    <div
                        className={styles.close}
                        onClick={() => resetSearch()}
                    >
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 496.096 496.096">
                            <path d="M259.41,247.998L493.754,13.654c3.123-3.124,3.123-8.188,0-11.312c-3.124-3.123-8.188-3.123-11.312,0L248.098,236.686 L13.754,2.342C10.576-0.727,5.512-0.639,2.442,2.539c-2.994,3.1-2.994,8.015,0,11.115l234.344,234.344L2.442,482.342 c-3.178,3.07-3.266,8.134-0.196,11.312s8.134,3.266,11.312,0.196c0.067-0.064,0.132-0.13,0.196-0.196L248.098,259.31 l234.344,234.344c3.178,3.07,8.242,2.982,11.312-0.196c2.995-3.1,2.995-8.016,0-11.116L259.41,247.998z"/>
                        </svg>
                    </div>
                }
            </div>
            <div className={styles.dropdown}>
                <div className={styles.list}>
                    {
                        checkboxes.map((item, idx) =>
                            <div key={idx}>
                                <SearchItem
                                    data={item}
                                    setCheckboxes={setCheckboxes}
                                    lang={lang.substr(0, 2)}
                                />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Search;
