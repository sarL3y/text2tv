import React from 'react';

import '../sass/Header.scss'; 

import { ReactComponent as ArrowRight } from '../assets/ArrowRight.svg';
import PromoVid from '../assets/T2TV_LandingPage_Animatic_02.mp4';

const PromoVidSection = (props) => {

    return (
        <section ref={props.promoVidSectionRef} className="fullpage-container">
            <div>
                <header>
                    <h2 className="tagline">Here's your text on text2tv:</h2>
                </header>
            </div>

            <div className="video">
                <video src={PromoVid} alt="" autoPlay={true} muted={true} loop controls />
            </div>

            <div className="cta">
                <header>
                    <h2 className="cta-text">Want more?</h2>
                </header>

                <button className="arrow-right">
                    <ArrowRight />
                </button>

                {/* <button className="cta-button">
                    CONTACT US
                </button> */}
            </div>
        </section>
    )
}

export default PromoVidSection;