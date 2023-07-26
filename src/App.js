
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Nabvar from './Components/Nabvar/Nabvar';

function App() {
  return (
    <BrowserRouter>
      <Nabvar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
