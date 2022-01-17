import React from "react";

import Slider from "react-slick";

import {translate} from "../../i18n/translate";

import styles from './index.module.scss';

const Header = ({lang, dataSetting}) => {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <header className={styles.block}>
           <Slider {...settings}>
               <>
                   <div className={styles.picture}>
                       <img
                           src="https://tereshchenko-id.com/website/manager/img/bg.webp"
                           alt="Slide 0"
                           loading={"lazy"}
                       />
                   </div>
                   <div className={styles.content}>
                       <h1 className={styles.title}>{translate('header_title')}</h1>
                       <h4 className={styles.subtitle}>{translate('header_subtitle')}</h4>
                   </div>
               </>
               {
                   dataSetting.job.slice(1, dataSetting.job.length).map((item, idx) =>
                       <React.Fragment key={idx}>
                           <div className={styles.picture}>
                               <img
                                   src={`/img/lg/${item.id}.webp`}
                                   alt="Slide 1"
                                   loading={"lazy"}
                               />
                           </div>
                           <div className={styles.content}>
                               <h2 className={styles.title}>{item[lang]}</h2>
                               <p className={styles.description}>description</p>
                           </div>
                       </React.Fragment>
                   )
               }
           </Slider>
        </header>
    );
}

export default Header;
