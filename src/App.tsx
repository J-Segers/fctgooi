import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import UnderConstruction from './pages/underConstruction/UnderConstruction';
import CalendarContextProvider from "./context/CalendarContext";

function App() {
    return (

        <BrowserRouter>
            <CalendarContextProvider>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path='/club' element={<UnderConstruction/>}/>
                    <Route path='/galerij' element={<UnderConstruction/>}/>
                    <Route path='/contact' element={<UnderConstruction/>}/>
                </Routes>
            </CalendarContextProvider>
        </BrowserRouter>

    );
}

export default App;
