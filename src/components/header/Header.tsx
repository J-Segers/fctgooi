import React from 'react';
import "./Header.css";
import logo from "../../assets/logo.svg";
import NavBar from '../navBar/NavBar';
import { Link } from 'react-router-dom';

Header.propTypes = {
    
};

function Header() {
    return (
        <header>
            <div id="header-container">
                <Link to={"/"}><img src={logo} alt="" /></Link>
                <NavBar />
            </div>
        </header>
    );
}

export default Header;