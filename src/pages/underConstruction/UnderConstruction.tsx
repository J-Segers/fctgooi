import React from 'react';
import "./UnderConstruction.css";
import uc from '../../assets/underConstruction.png';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';

function UnderConstruction() {
    return (
        <>
            <Header />
            <div className="construction-container">
                <section className="contact-info">
                    <h1>
                        Website is<br/>
                        <span>under construction</span>
                    </h1>
                    <article>
                        Er wordt gewerkt aan de website.<br />
                        Voor actuele informatie kunt u contact opnemen via de contact pagina.
                    </article>
                    <Link className="contact-button" to={"/contact"}>
                        CONTACT
                    </Link>
                </section>
                <img src={uc} alt="under construction" />
            </div>
            <Footer />
            
        </>
    );
}

export default UnderConstruction;