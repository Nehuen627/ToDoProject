
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Nabvar from './Components/Nabvar/Nabvar';
import Pending from './Components/Pending/Pending';
import Completed from './Components/Completed/Completed';
import CalendarComponent from './Components/Calendar/Calendar';
import { SidebarProvider } from './Context/padding';


function App() {
  return (
    <SidebarProvider>
      <div className='mainContainer'>
        <BrowserRouter>
          <Nabvar/>
          <div className='content'>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/Pending" element={<Pending/>}/>
              <Route exact path="/Completed" element={<Completed/>}/>
              <Route exact path="/Calendar" element={<CalendarComponent/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </SidebarProvider>
  );
}

export default App;
