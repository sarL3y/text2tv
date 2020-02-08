import React from 'react';

import { ReactComponent as ArrowDownSVG } from '../../assets/ArrowDown.svg';

const NextPageButton = (props) => {

    return (
        <button className="arrow-down" onClick={props.clickProp}>
            <ArrowDownSVG />
        </button> 
    )
};

export default NextPageButton;