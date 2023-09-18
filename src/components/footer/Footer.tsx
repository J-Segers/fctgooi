import React, { useEffect } from 'react';
import "./Footer.css";
import instagram from "../../assets/instagram-icon.svg";
import facebook from "../../assets/facebook-icon.svg";
import PropTypes from 'prop-types';
import { getNextMeeting } from '../../helperFunctions/nextmeet';

Footer.propTypes = {
    
};

function Footer() {

    let meeting: Date = new Date();

    return (
        <footer>
            <section className="adres">
                Wijkcentrum Lopes Dias<br />
                Lopes Diaslaan 213<br />
                1222 VE Hilversum
            </section>
            <section className="social">
                <h3>Volg ons op Social Media</h3>
                <a href="https://www.instagram.com/fotoclubtgooi/" target='_blank'>
                    <img className="instagram" src={instagram} alt="" />
                </a>
                <a href="https://www.facebook.com/www.fctgooi.nl/?locale=nl_NL" target='_blank'>
                    <img className="facebook" src={facebook} alt="" />
                </a>
            </section>
            <section className="meet">
                Volgende bijeenkomst:<br />
                <span>{`${getNextMeeting().toLocaleDateString()}`}</span>
            </section>
        </footer>
    );
}

export default Footer;