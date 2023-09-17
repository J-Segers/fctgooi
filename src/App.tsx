import React from 'react';
import './App.css';
import Header from './components/header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import UnderConstruction from './pages/underConstruction/UnderConstruction';

function App() {
  return (

    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/club' element={<UnderConstruction />} />
          <Route path='/galerij' element={<UnderConstruction />} />
          <Route path='/contact' element={<UnderConstruction />} />
        </Routes>

    </BrowserRouter>

  );
}

export default App;
