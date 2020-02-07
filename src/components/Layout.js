import React, { useRef, useEffect } from 'react';
import videojs from 'video.js'

// import Fade from 'react-reveal/Fade';

import LoremIpsum from '../assets/loremipsum.mp4';
import t2tv from '../assets/T2TV_LandingPage_Animatic_02.mp4';
import { ReactComponent as ArrowDown } from '../assets/ArrowDown.svg';
import { ReactComponent as ArrowRight } from '../assets/ArrowRight.svg';
import { ReactComponent as Cover } from '../assets/default-monochrome.svg';
import Carousel from './Carousel';
import Header from './Header';

import '../sass/Layout.scss';

const Layout = (props) => {
    const pageTwoRef = useRef(null);
    // const loremIpsumRef = useRef();
    // const t2tvRef = useRef();

    const handleScroll = () => {
        pageTwoRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    // useEffect(() => {
    //     const loremIpsumPlayer = videojs(loremIpsumRef.current, { autoplay: true, muted: true }, () => {
    //         loremIpsumPlayer.src()
    //     })
    // }

    return (
        <div className="layout-container">
            <div className="page-one">
                <div>
                    <header className="site-headers">
                        <h1>
                            <Cover />
                        </h1>
                        <h2 className="site-headline">Here's your text...</h2>
                    </header>
                </div>

                <div className="content">
                    <div className="content-left">
                        <video src={LoremIpsum} alt="" autoPlay={true} muted={true} loop controls />
                    </div>
                </div>

                <button className="arrow-down" onClick={handleScroll}>
                    <ArrowDown />
                </button>
            </div>
            
            <div className="page-two" ref={pageTwoRef}>
                <div>
                    <header>
                        <h2 className="site-headline">Here's your text on text2tv:</h2>
                    </header>
                </div>

                <div className="video">
                    <video src={t2tv} alt="" autoPlay={true} muted={true} loop controls />
                </div>

                <div className="cta">
                    <header>
                        <h2 className="cta-text">Want more?</h2>
                    </header>

                    <button className="arrow-right" onClick={handleScroll}>
                        <ArrowRight />
                    </button>

                    {/* <button className="cta-button">
                        CONTACT US
                    </button> */}
                </div>
            </div>
            {/* <div className="header-container">
                <Header />
            </div>

            <div className="carousel-container">
                <Carousel />
            </div> */}
        </div>
    )
}

export default Layout;