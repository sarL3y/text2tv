import React, { useRef } from 'react';

import '../sass/Layout.scss';

import useFetch from '../hooks/useFetch';

// import Header from './Header';
// import LoremIpsumVidSection from './LoremIpsumVidSection';
// import PromoVidSection from './PromoVidSection';
// import Footer from './Footer';

const Layout = (props) => {
    // const promoVidSectionRef = useRef();

    // const reqHeaders = new Headers();
    // reqHeaders.set("X-AYLIEN-TextAPI-Application-Key", "e9b1672bb5e2c11c645c5c5366249ebf");
    // reqHeaders.set("X-AYLIEN-TextAPI-Application-ID", "X-AYLIEN-TextAPI-Application-ID");
    // reqHeaders.set("Content-Type", "application/json");
    // console.log(JSON.stringify(reqHeaders));


    const { response, error, isLoading } = useFetch();

    // const handlePageScroll = () => {
    //     promoVidSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    // };

    return (
        <div className="layout-container" >
            <div>
                {isLoading && <div>Loading...</div>}
                {error && <div>{`${error}`}</div>}
                {response && response.map((item, index) => (
                    <div>{item.sentences}</div>
                ))}
            </div>
            
            {/* <Header />
            <LoremIpsumVidSection clickProp={handlePageScroll} />
            <PromoVidSection promoVidSectionRef={promoVidSectionRef} />
            <Footer /> */}
        </div>
    );
};

export default Layout;