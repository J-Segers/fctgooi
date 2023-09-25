import React from 'react';
import "./Hero.css";
import info from "../../assets/Information-Icon.svg";
import foto from "../../assets/Bob Altena-.jpg"

Hero.propTypes = {
};

interface heroObj {
    foto: string,
    fotograaf: string,
    info: string,
}

function Hero() {


    const maandFoto: heroObj = {
        foto: foto,
        fotograaf: "Bob Altena",
        info: "Macro foto gemaakt met telefoon"
    }

    return (
        <div id="hero">
            <div className="maand-info">
                <img src={info} alt="" />
                <h2>Foto van de Maand</h2>
                <div className="fotograaf"><span>Gemaakt door:</span>{` ${maandFoto?.fotograaf}.`}</div>
                <div className="info-specs">
                   {`${maandFoto?.info}`}
                </div>
            </div>
            <div className='hero-image-container'>
                <img src={maandFoto.foto} alt="" />
            </div>
        </div>
    );
}

export default Hero;