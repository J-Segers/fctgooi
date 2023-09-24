import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import UnderConstruction from './pages/underConstruction/UnderConstruction';
import {CalendarProvider} from "./context/KalenderContext";
import Kalender from "./pages/kalender/Kalender";
import React from "react";
import ClubTochten from "./pages/clubtochten/ClubTochten";

function App() {
    return (
        <CalendarProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='*' element={<Home/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path='/club' element={<ClubTochten/>}/>
                    <Route path='/kalender' element={<Kalender/>}/>
                    <Route path='/galerij' element={<UnderConstruction/>}/>
                    <Route path='/contact' element={<UnderConstruction/>}/>
                </Routes>
            </BrowserRouter>
        </CalendarProvider>
    );
}

export default App;
