import React from 'react';
import logo from "../../assets/logo.svg";
import "./HeaderComponent.css";
import NavBar from '../navBar/NavBar';
import { Link } from 'react-router-dom';

function HeaderComponent() {

    return (
        <header>
            <div id="header-container">
                <Link to={"/"} className={"logo"}><img src={logo} alt="" /></Link>
                <NavBar />
            </div>
        </header>
    );
    
}

export default HeaderComponent;