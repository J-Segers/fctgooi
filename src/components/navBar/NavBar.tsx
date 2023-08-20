import React from 'react';
import PropTypes from 'prop-types';
import "./NavBar.css";
import { Link } from 'react-router-dom';

NavBar.propTypes = {
    
};

function NavBar() {
    return (
        <nav>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="#" className="drop">Club</Link></li>
                <li><Link to="/galerij">Fotogalerij</Link></li>
                <li><a href="mailto:info@fctgooi.nl" className="contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;