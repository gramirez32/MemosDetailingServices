import React  from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/Services';
import SignUp from './components/SignUp';
import Products from './components/Products';

function App() {
  return (
    <>
        <Router>
          <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/services' element={<Services/>}/>
              <Route path='/signup' element={<SignUp/>}/>
              <Route path='/products' element={<Products/>}/>
            </Routes>
        </Router>
    </>
  );
}

export default App;
