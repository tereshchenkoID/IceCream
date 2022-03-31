import React from "react";
import {useDispatch, useSelector} from "react-redux";

import classes from 'classnames';

import {setFavouriteData} from "../../redux/actions/favouriteActions";

import styles from './index.module.scss';

const addFavourite = (id, favourite) => {
    const arr = favourite.slice();

    arr.find((e) => { return e === id }) ? arr.splice(arr.indexOf(id), 1) : arr.push(id)
    localStorage.setItem('favourite', JSON.stringify(arr));

    return arr
};

const getFavourite = (id, favourite) => {
    return favourite.find((e) => {return e === id});
}

const Favourite = ({ id }) => {
    const dispatch = useDispatch();

    const { favourite } = useSelector(state => state.favouriteReducer)

    return (
        <button
            className={classes(
                styles.block,
                getFavourite(id, favourite) && styles.active
            )}
            onClick={() => {
                dispatch(setFavouriteData(addFavourite(id, favourite)))
            }}
        >
            <svg height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg">
                <path d="m23.363 8.584-7.378-1.127-3.307-7.044c-.247-.526-1.11-.526-1.357 0l-3.306 7.044-7.378 1.127c-.606.093-.848.83-.423 1.265l5.36 5.494-1.267 7.767c-.101.617.558 1.08 1.103.777l6.59-3.642 6.59 3.643c.54.3 1.205-.154 1.103-.777l-1.267-7.767 5.36-5.494c.425-.436.182-1.173-.423-1.266z" fill="#fff"/>
            </svg>
        </button>
    );
}

export default Favourite;
