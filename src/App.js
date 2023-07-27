
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Nabvar from './Components/Nabvar/Nabvar';
import Pending from './Components/Pending/Pending';

function App() {
  return (
    <BrowserRouter>
      <Nabvar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Pending" element={<Pending/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
