import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import UnderConstruction from './pages/underConstruction/UnderConstruction';

function App() {
  return (

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/info' element={<UnderConstruction />} />
          <Route path='/kalender' element={<UnderConstruction />} />
          <Route path='/clubtochten' element={<UnderConstruction />} />
          <Route path='/evenementen' element={<UnderConstruction />} />
          <Route path='/galerij' element={<UnderConstruction />} />
          <Route path='/contact' element={<UnderConstruction />} />
        </Routes>

    </BrowserRouter>

  );
}

export default App;
