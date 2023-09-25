import React, {useContext} from 'react';
import {KalenderContext} from "../../context/KalenderContext";
import IKalenderItem from "../../models/kalenderItem";
import AgendaItem from "../../components/agendaItem/AgendaItem";
import Header from "../../components/headerComponent/HeaderComponent";
import Footer from "../../components/footerComponent/FooterComponent";
import "./Kalender.css";

function Kalender() {

    const agendaItems: IKalenderItem[] = useContext(KalenderContext);

    return (
        <div id={"kalender-pagina-container"}>
            <Header/>

            <div id="kalender-container">
                <h2>Agenda</h2>
                <div id={"kalender-items"}>
                    <AgendaItem soort={"Soort"} bijzonderheden={"Bijzonderheden"} activiteit={"Activiteit"} datum={"Datum"} />
                    {agendaItems && agendaItems.map(({id, soort, datum, bijzonderheden, activiteit}) => {
                        return (
                            <>
                                <AgendaItem
                                    key={id}
                                    soort={soort}
                                    datum={datum}
                                    bijzonderheden={bijzonderheden}
                                    activiteit={activiteit}
                                />
                            </>
                        );
                    })}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Kalender;