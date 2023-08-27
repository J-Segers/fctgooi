import React from 'react';
import "./Header.css";
import phLogo from "../../assets/logoKlein.gif";
import PropTypes from 'prop-types';
import NavBar from '../navBar/NavBar';

Header.propTypes = {
    
};

function Header() {

    return (
        <header>
            <div id="header-container">
                <img src={phLogo} alt="" />
                <NavBar />
            </div>
        </header>
    );
    
}

export default Header;