import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./NavBar.css";
import { Link } from 'react-router-dom';

NavBar.propTypes = {
    
};

function NavBar() {
    
    const [isOpen, toggleIsOpen] = useState(false);

    return (
        <div id="nav-container">
            <nav className={isOpen ? "open" : "closed"}>
                <Link to="/home">Home</Link>
                <Link to="#" className="drop">Club</Link>
                <Link to="/galerij">Fotogalerij</Link>
                <a href="mailto:info@fctgooi.nl" className="contact">Contact</a>
            </nav>
            <div className={isOpen ? "burger-btn-open" : "burger-btn-closed"} onClick={() => toggleIsOpen(!isOpen)}>
                <div className="bar" />
                <div className="bar" />
                <div className="bar" />
            </div>
        </div>
        
    );
}

export default NavBar;