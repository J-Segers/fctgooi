import React from 'react';
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import EventOverview from "../../components/eventOverview/EventOverview";
import {EventSoort} from "../../utils/CONSTANTS";
import FooterComponent from "../../components/footerComponent/FooterComponent";

function Bondsfotowedstrijd() {
    return (
        <div id={"clubtochten-container"}>
            <HeaderComponent />
            <EventOverview type={EventSoort.Bondsfotowedstrijd} />
            <FooterComponent />
        </div>
    );
}

export default Bondsfotowedstrijd;