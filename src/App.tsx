import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import UnderConstruction from './pages/underConstruction/UnderConstruction';
import {CalendarProvider} from "./context/KalenderContext";
import Kalender from "./pages/kalender/Kalender";
import React from "react";
import EventOverview from "./pages/eventOverview/EventOverview";
import {EventSoort} from "./utils/CONSTANTS";

function App() {
    return (
        <CalendarProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='*' element={<Home/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path='/clubtochten' element={<EventOverview type={EventSoort.Clubtocht}/>}/>
                    <Route path='/bondsfotowedstrijd' element={<EventOverview type={EventSoort.Bondsfotowedstrijd}/>}/>
                    <Route path='/exposities' element={<EventOverview type={EventSoort.Expositie}/>}/>
                    <Route path='/debesteclub' element={<EventOverview type={EventSoort.DeBesteClub}/>}/>
                    <Route path='/kalender' element={<Kalender/>}/>
                    <Route path='/galerij' element={<UnderConstruction/>}/>
                    <Route path='/contact' element={<UnderConstruction/>}/>
                </Routes>
            </BrowserRouter>
        </CalendarProvider>
    );
}

export default App;
