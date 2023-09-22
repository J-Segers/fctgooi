import React from 'react';
import "./FooterComponent.css";
import instagram from "../../assets/instagram-icon.svg";
import facebook from "../../assets/facebook-icon.svg";
import PropTypes from 'prop-types';

FooterComponent.propTypes = {
    
};

function FooterComponent() {
    return (
        <footer>
            <section className="adres">
                Wijkcentrum Lopes Dias<br />
                Lopes Diaslaan 213<br />
                1222 VE Hilversum
            </section>
            <section className="social">
                <h3>Volg ons op Social Media</h3>
                <img className="instagram" src={instagram} alt="" />
                <img className="facebook" src={facebook} alt="" />
            </section>
            <section className="meet">
                Volgende bijeenkomst:<br />
                10 - sept - 2023
            </section>
        </footer>
    );
}

export default FooterComponent;