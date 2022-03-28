import React from "react";

import classes from "classnames";

import styles from './index.module.scss';

const Photo = ({
    photo,
    size,
    upload
}) => {
    return (
        <div
            className={classes(
                styles.block,
                styles[size]
            )}
        >
            {
                upload
                ?
                    <img
                        src={photo}
                        loading={'lazy'}
                        alt={photo}
                    />
                :
                    <img
                        src={photo ? `/img/profile/${photo}` : "/img/no-photo.webp"}
                        loading={'lazy'}
                        alt={photo}
                    />
            }
        </div>
    );
}

export default Photo;
