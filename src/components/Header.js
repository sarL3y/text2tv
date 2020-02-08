import React from 'react';

import '../sass/Header.scss'; 

import { ReactComponent as Logo } from '../assets/LogoMain.svg';

const Header = (props) => {

    return (
        <div className="header-layout">
            <header className="site-headers">
                <h1>
                    <Logo />
                </h1>
            </header>
        </div>
    )
}

export default Header;