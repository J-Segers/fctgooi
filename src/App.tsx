import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import {CalendarProvider} from "./context/KalenderContext";
import Kalender from "./pages/kalender/Kalender";
import Clubtochten from "./pages/clubtochten/Clubtochten";
import Bondsfotowedstrijd from "./pages/bondsfotowedstrijd/Bondsfotowedstrijd";
import Exposities from "./pages/expositie/Exposities";
import DBC from "./pages/dbc/DBC";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import Gallerij1 from "./components/gallerij1/Gallerij1";
import Gallerij2 from "./components/gallerij2/Gallerij2";

function App() {
    return (
        <CalendarProvider>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path='*' element={<Home/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path='/clubtochten' element={<Clubtochten />}/>
                    <Route path='/bondsfotowedstrijd' element={<Bondsfotowedstrijd />}/>
                    <Route path='/exposities' element={<Exposities />}/>
                    <Route path='/de-beste-club' element={<DBC />}/>
                    <Route path='/kalender' element={<Kalender/>}/>
                    <Route path='/contact' element={<Contact />}/>
                    <Route path={"/clubtochten/:id"} element={<Gallerij2 />} />
                    <Route path={"/bondsfotowedstrijd/:id"} element={<Gallerij2 />} />
                    <Route path={"/exposities/:id"} element={<Gallerij2 />} />
                    <Route path={"/de-beste-club/:id"} element={<Gallerij2 />} />
                </Routes>
            </BrowserRouter>
        </CalendarProvider>
    );
}

export default App;
