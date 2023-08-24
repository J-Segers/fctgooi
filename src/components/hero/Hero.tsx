import React from 'react';
import "./Hero.css";
import info from "../../assets/Information-Icon.png";
import PropTypes from 'prop-types';

Hero.propTypes = {
    
};

function Hero() {
    const maandFoto = {
        fotograaf: "Pieter Post",
        evenement: "club wedstrijd",
        opmerking: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
    return (
        <div id="hero">
            <div className="maand-info">
                <img src={info} alt="" />
                <h2>Foto van de Maand</h2>
                <div className="fotograaf"><span>Gemaakt door:</span>{` ${maandFoto?.fotograaf}.`}</div>
                <div className="evenement"><span>Evenement:</span>{` ${maandFoto?.evenement}.`}</div>
                <div className="info-specs">
                   {`${maandFoto?.opmerking}`}
                </div>
            </div>
        </div>
    );
}

export default Hero;