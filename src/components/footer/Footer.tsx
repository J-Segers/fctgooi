import React from 'react';
import "./Footer.css";
import instagram from "../../assets/instagram-icon.svg";
import facebook from "../../assets/facebook-icon.svg";
import { getNextMeeting } from '../../helperFunctions/nextmeet';

function Footer() {

    return (
        <footer>
            <section className="adres">
                Wijkcentrum Lopes Dias<br />
                Lopes Diaslaan 213<br />
                1222 VE Hilversum
            </section>
            <section className="social">
                <h3>Volg ons op Social Media</h3>
                <a href="https://www.instagram.com/fotoclubtgooi/" target='_blank' rel="noopener noreferrer">
                    <img className="instagram" src={instagram} alt="" />
                </a>
                <a href="https://www.facebook.com/www.fctgooi.nl/?locale=nl_NL" target='_blank' rel="noopener noreferrer">
                    <img className="facebook" src={facebook} alt="" />
                </a>
            </section>
            <section className="meet">
                Volgende bijeenkomst:<br />
                <span>{`${getNextMeeting()}`}</span>
            </section>
        </footer>
    );
}

export default Footer;