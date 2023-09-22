import React from 'react';
import "./HeaderComponent.css";
import phLogo from "../../assets/logoKlein.gif";
import PropTypes from 'prop-types';
import NavBar from '../navBar/NavBar';

HeaderComponent.propTypes = {
    
};

function HeaderComponent() {

    return (
        <header>
            <div id="header-container">
                <img src={phLogo} alt="" />
                <NavBar />
            </div>
        </header>
    );
    
}

export default HeaderComponent;