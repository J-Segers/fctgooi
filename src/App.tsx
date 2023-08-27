import React from 'react';
import './App.css';
import Header from './components/header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/footer/Footer';

function App() {
  return (

    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path='/galerij' element={<Galerij />} />
          <Route path='/galerij' element={<Galerij />} />
          <Route path='/galerij' element={<Galerij />} />
          <Route path='/galerij' element={<Galerij />} /> */}
        </Routes>

    </BrowserRouter>

  );
}

export default App;
