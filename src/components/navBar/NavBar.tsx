import React, { useState } from 'react';
import "./NavBar.css";
import { Link } from 'react-router-dom';

function NavBar() {
    
    const [isOpen, toggleIsOpen] = useState<boolean>(false);
    const [dropDown, toggleDropDown] = useState<boolean>(false);

    function openBurger() {
        if(isOpen) {
            if(dropDown) {
                toggleDropDown(false);
            }
            toggleIsOpen(false);
        } else {
            toggleIsOpen(true);
        }
    }

    return (
        <div id={"nav-container"}>
            <nav className={isOpen ? "open" : "closed"}>
                <Link to={"/"}>Home</Link>
                <div className={"title"} onClick={() => toggleDropDown(!dropDown)}>Club</div>
                <div className={`dropdown-${dropDown ? "open" : "closed"}`}>
                    <Link to={"/clubtochten"} >Clubtochten</Link>
                    <Link to={"/bondsfotowedstrijd"} >Bondsfotowedstrijd</Link>
                    <Link to={"/expositie"} >Exposities</Link>
                    <Link to={"/debesteclub"} >De Beste Club</Link>
                </div>
                <Link to={"/kalender"}>Kalender</Link>
                <Link to={"/contact"}>Contact</Link>
            </nav>
            <div className={isOpen ? "burger-btn-open" : "burger-btn-closed"} onClick={() => openBurger()}>
                <div className={"bar"} />
                <div className={"bar"} />
                <div className={"bar"} />
            </div>
        </div>
        
    );
}

export default NavBar;