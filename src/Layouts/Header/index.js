import React from "react";

import Slider from "react-slick";

import {translate} from "../../i18n/translate";

import styles from './index.module.scss';

const Header = () => {
    const settings = {
        dots: true,
        arrows: false,
        lazyLoad: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        fade: true
    };

    return (
        <header className={styles.block}>
           <Slider {...settings}>
               <>
                   <div className={styles.picture}>
                       <picture>
                           <source media="(max-width: 576px)" srcSet={`/img/service/576/1x/1.webp 1x, /img/service/576/2x/1@2x.webp 2x`}/>
                           <source media="(max-width: 768px)" srcSet={`/img/service/768/1x/1.webp 1x, /img/service/768/2x/1@2x.webp 2x`}/>
                           <source media="(max-width: 992px)" srcSet={`/img/service/992/1x/1.webp 1x, /img/service/992/2x/1@2x.webp 2x`}/>
                           <source media="(max-width: 1200px)" srcSet={`/img/service/1200/1x/1.webp 1x, /img/service/1200/2x/1@2x.webp 2x`}/>
                           <source media="(max-width: 1600px)" srcSet={`/img/service/1600/1x/1.webp 1x, /img/service/1600/2x/1@2x.webp 2x`}/>
                           <source media="(min-width: 2000px)" srcSet={`/img/service/2048/1x/1.webp 1x, /img/service/2047/2x/1@2x.webp 2x`}/>
                           <img src={"/img/service/1600/1x/1.webp"} alt={`Slide 1`} />
                       </picture>
                   </div>
                   <div className={styles.content}>
                       <h2 className={styles.title}>{translate('header_title_1')}</h2>
                       <h4 className={styles.subtitle}>{translate('header_subtitle_1')}</h4>
                   </div>
               </>
               <>
                   <div className={styles.picture}>
                       <picture>
                           <source media="(max-width: 576px)" srcSet={`/img/service/576/1x/2.webp 1x, /img/service/576/2x/2@2x.webp 2x`}/>
                           <source media="(max-width: 768px)" srcSet={`/img/service/768/1x/2.webp 1x, /img/service/768/2x/2@2x.webp 2x`}/>
                           <source media="(max-width: 992px)" srcSet={`/img/service/992/1x/2.webp 1x, /img/service/992/2x/2@2x.webp 2x`}/>
                           <source media="(max-width: 1200px)" srcSet={`/img/service/1200/1x/2.webp 1x, /img/service/1200/2x/2@2x.webp 2x`}/>
                           <source media="(max-width: 1600px)" srcSet={`/img/service/1600/1x/2.webp 1x, /img/service/1600/2x/2@2x.webp 2x`}/>
                           <source media="(min-width: 2000px)" srcSet={`/img/service/2048/1x/2.webp 1x, /img/service/2047/2x/2@2x.webp 2x`}/>
                           <img src={"/img/service/1600/1x/2.webp"} alt={`Slide 2`} />
                       </picture>
                   </div>
                   <div className={styles.content}>
                       <h2 className={styles.title}>{translate('header_title_2')}</h2>
                       <h4 className={styles.subtitle}>{translate('header_subtitle_2')}</h4>
                   </div>
               </>
               <>
                   <div className={styles.picture}>
                       <picture>
                           <source media="(max-width: 576px)" srcSet={`/img/service/576/1x/3.webp 1x, /img/service/576/2x/3@2x.webp 2x`}/>
                           <source media="(max-width: 768px)" srcSet={`/img/service/768/1x/3.webp 1x, /img/service/768/2x/3@2x.webp 2x`}/>
                           <source media="(max-width: 992px)" srcSet={`/img/service/992/1x/3.webp 1x, /img/service/992/2x/3@2x.webp 2x`}/>
                           <source media="(max-width: 1200px)" srcSet={`/img/service/1200/1x/3.webp 1x, /img/service/1200/2x/2@2x.webp 2x`}/>
                           <source media="(max-width: 1600px)" srcSet={`/img/service/1600/1x/3.webp 1x, /img/service/1600/2x/2@2x.webp 2x`}/>
                           <source media="(min-width: 2000px)" srcSet={`/img/service/2048/1x/3.webp 1x, /img/service/2047/2x/2@2x.webp 2x`}/>
                           <img src={"/img/service/1600/1x/3.webp"} alt={`Slide 3`} />
                       </picture>
                   </div>
                   <div className={styles.content}>
                       <h2 className={styles.title}>{translate('header_title_3')}</h2>
                       <h4 className={styles.subtitle}>{translate('header_subtitle_3')}</h4>
                   </div>
               </>
           </Slider>
        </header>
    );
}

export default Header;
