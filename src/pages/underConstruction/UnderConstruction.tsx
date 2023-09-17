import React from 'react';
import uc from '../../assets/underConstruction.png';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

function UnderConstruction() {
    return (
        <>
            <Header />
            <img src={uc} alt="" />
            <Footer />
            
        </>
    );
}

export default UnderConstruction;