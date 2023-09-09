import React from 'react';
import image from "../../assets/1wordt aan gewerkt.jpg";
import "./UnderConstruction.css";

function UnderConstruction() {
    return (
        <div className={`container`}>
            <img src={image} alt="under construction"/>
        </div>
    );
}

export default UnderConstruction;