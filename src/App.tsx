import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";

function App() {
  return (

    <BrowserRouter>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          {/* <Route path='/galerij' element={<Galerij />} />
          <Route path='/galerij' element={<Galerij />} />
          <Route path='/galerij' element={<Galerij />} />
          <Route path='/galerij' element={<Galerij />} /> */}
            <Route path="/contact" element={<Contact />} />
        </Routes>

    </BrowserRouter>

  );
}

export default App;
