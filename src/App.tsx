import React from 'react';
import './App.css';

function App() {
  return (

    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
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
