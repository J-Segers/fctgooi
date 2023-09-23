import React, { useContext } from 'react';
import "./Footer.css";
import instagram from "../../assets/instagram-icon.svg";
import facebook from "../../assets/facebook-icon.svg";
import {KalenderContext} from "../../context/KalenderContext";
import IKalenderItem from "../../models/kalenderItem";

function Footer() {
    const agendaItems: IKalenderItem[] = useContext(KalenderContext);

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
                <span>{agendaItems[0]?.datum}</span>
            </section>
        </footer>
    );
}

export default Footer;