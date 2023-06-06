import './App.css';

//react router dom
import {BrowserRouter, Routes, Route} from "react-router-dom";

//components
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';

//pages

function App() {
  return (
    <div className="App">
      <h1>Context API</h1>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/news' element={<News/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
