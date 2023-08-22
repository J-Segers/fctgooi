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
                <div className="info-title">
                    <h2>Foto van de Maand</h2>
                </div>
                <div className="info-specs">
                    <ul>
                        <li>
                            {`Gemaakt door: ${maandFoto?.fotograaf}`}
                        </li>
                        <li>
                            {`Evenement: ${maandFoto?.evenement}`}
                        </li>
                        <li>{`${maandFoto?.opmerking}`}</li>
                    </ul>

                </div>
            </div>
        </div>
    );
}

export default Hero;