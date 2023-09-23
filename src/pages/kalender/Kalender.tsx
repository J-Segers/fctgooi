import React, {useContext} from 'react';
import {KalenderContext} from "../../context/KalenderContext";
import IKalenderItem from "../../models/kalenderItem";
import AgendaItem from "../../components/agendaItem/AgendaItem";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Kalender.css";

function Kalender() {

    const agendaItems: IKalenderItem[] = useContext(KalenderContext);

    return (
        <div>
            <Header/>
            <div id="kalender-container">
                {agendaItems && agendaItems.map(({id, soort, datum, bijzonderheden, activiteit}) => {
                    return (
                        <AgendaItem
                            key={id}
                            soort={soort}
                            datum={datum}
                            bijzonderheden={bijzonderheden}
                            activiteit={activiteit}
                        />
                    )
                })}
            </div>
            <Footer/>
        </div>
    );
}

export default Kalender;