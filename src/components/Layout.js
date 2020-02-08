import React, { useRef } from 'react';

import '../sass/Layout.scss';

import Header from './Header';
import LoremIpsumVidSection from './LoremIpsumVidSection';
import PromoVidSection from './PromoVidSection';
import Footer from './Footer';

const Layout = (props) => {
    const promoVidSectionRef = useRef();

    const handlePageScroll = () => {
        promoVidSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="layout-container" >
            <Header />
            <LoremIpsumVidSection clickProp={handlePageScroll} />
            <PromoVidSection promoVidSectionRef={promoVidSectionRef} />
            <Footer />
        </div>
    );
};

export default Layout;