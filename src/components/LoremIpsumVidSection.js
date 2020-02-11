import React from 'react';

import '../sass/Header.scss'; 

import LoremIpsumVid from '../assets/loremipsum.mp4';
import NextPageButton from './buttons/NextPageButton';

const LoremIpsumVidSection = (props) => {

    return (
        <section className="fullpage-container">
            <h2 className="tagline">Here's your text...</h2>
            <div className="content">
                <div className="content-left">
                    <video src={LoremIpsumVid} alt="" autoPlay={true} muted={true} loop controls />
                </div>
            </div> 

            <NextPageButton {...props} />
        </section>
    );
};

export default LoremIpsumVidSection;