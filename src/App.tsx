import React from 'react';
import './App.css';
import Header from './components/header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/footer/Footer';

function App() {
  return (

    <BrowserRouter>
      <Header />
    
      <main>

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path='/galerij' element={<Galerij />} />
          <Route path='/galerij' element={<Galerij />} />
          <Route path='/galerij' element={<Galerij />} />
          <Route path='/galerij' element={<Galerij />} /> */}
        </Routes>

      </main>
      

      <Footer />
      

    </BrowserRouter>

  );
}

export default App;
