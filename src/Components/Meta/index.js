import React from "react";

import {translateString} from "../../i18n/translate";

const Meta = () => {
    return (
        <>
            <link rel="canonical" href="https://global-workers.eu" />

            <meta name="title" content="Global Workers" />
            <meta name="description" content={translateString('meta_description')} />
            <meta name="keywords" content={translateString('meta_keywords')} />

            <meta property="og:type" content="https://global-workers.eu" />
            <meta property="og:url" content="https://global-workers.eu" />
            <meta property="og:image" content="https://global-workers.eu/logo512.png" />
            <meta property="og:site_name" content="global-workers.eu" />
            <meta property="og:title" content="Global Workers" />
            <meta property="og:description" content={translateString('meta_description')} />

            <meta property="twitter:url" content="https://global-workers.eu" />
            <meta property="twitter:card" content="https://global-workers.eu/logo512.png" />
            <meta property="twitter:image" content="https://global-workers.eu/logo512.png" />
            <meta property="twitter:title" content="Global Workers" />
            <meta property="twitter:description" content={translateString('meta_description')} />
        </>
    );
}

export default Meta;
