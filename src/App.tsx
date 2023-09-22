import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import UnderConstruction from './pages/underConstruction/UnderConstruction';
import {CalendarProvider} from "./context/CalendarContext";


function App() {
    // const [calendarItems, setCalendarItems] = useState<Array<ICalendarItem>>([]);
    //
    // useEffect(() => {
    //     CalendarService
    //         .getAll()
    //         .then(res => setCalendarItems(res))
    //         .catch(e => console.error(e))
    // }, []);

    return (
        <CalendarProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path='/club' element={<UnderConstruction/>}/>
                    <Route path='/galerij' element={<UnderConstruction/>}/>
                    <Route path='/contact' element={<UnderConstruction/>}/>
                </Routes>
            </BrowserRouter>
        </CalendarProvider>


    );
}

export default App;
