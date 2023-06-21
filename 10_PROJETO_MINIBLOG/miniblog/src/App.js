import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';

//hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';
import { AuthProvider } from './context/AuthContext';

//components
import NavBar from './components/NavBar';
import Footer from './components/Footer';

//pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import CreatePost from './pages/CreatePost/CreatePost';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {

  const [user, setUser] = useState(undefined);

  const {auth} = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if(loadingUser){
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{user}}>
        <BrowserRouter>
        <NavBar/>
          <div className="container">
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/login' element={!user ? (<Login/>) : (<Navigate to="/"/>)}/>
              <Route path='/register' element={!user ? (<Register/>) : (<Navigate to="/"/>)}/>
              <Route path='/posts/create' element={user ? (<CreatePost/>) : (<Navigate to="/login"/>)}/>
              <Route path='/dashboard' element={user ? (<Dashboard/>) : (<Navigate to="/login"/>)}/>
            </Routes>
          </div>
        </BrowserRouter>
        <Footer/>
      </AuthProvider>
    </div>
  );
}

export default App;
