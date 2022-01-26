import React from "react";

import styles from './index.module.scss';

const Social = () => {
    return (
        <div className={styles.block}>
            <div className={styles.item}>
                <button
                    className={styles.link}
                    onClick={() => window.location = 'mailto:admin@global-workers.eu'}
                >
                    <svg viewBox="0 0 32 32">
                        <path stroke="none" strokeWidth="1" fillRule="evenodd" fill="#000" d="M5.31500722,9.27391933 C5.12106043,9.45739405 5,9.71770487 5,10.0068455 L5,21.9931545 C5,22.2828882 5.11915965,22.5440384 5.31310687,22.7277332 L5.31310687,22.7277332 L13.05,16 L5.31500722,9.27391933 L5.31500722,9.27391933 L5.31500722,9.27391933 Z M27.6868931,9.27226685 C27.8808404,9.45596162 28,9.71711185 28,10.0068455 L28,21.9931545 C28,22.2822951 27.8789396,22.542606 27.6849928,22.7260807 L19.95,16 L27.6868931,9.27226685 L27.6868931,9.27226685 Z M19.2018297,16.6505829 L26.5,23 L6.5,23 L13.7981703,16.6505829 L16.5,19 L19.2018297,16.6505829 L19.2018297,16.6505829 Z M6.00359486,8 C4.89703997,8 4,8.89451376 4,9.99406028 L4,22.0059397 C4,23.1072288 4.88976324,24 6.00359486,24 L26.9964051,24 C28.10296,24 29,23.1054862 29,22.0059397 L29,9.99406028 C29,8.8927712 28.1102368,8 26.9964051,8 L6.00359486,8 L6.00359486,8 Z M16.5,17.7000122 L26.5,9 L6.5,9 L16.5,17.7000122 L16.5,17.7000122 Z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Social;
