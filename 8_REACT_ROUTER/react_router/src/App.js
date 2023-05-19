import './App.css';

//1- Config react router;
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';

//Components
import NavBar from './components/NavBar.js';

function App() {
  return (
    <div className="App">
      <h1>react router</h1>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
