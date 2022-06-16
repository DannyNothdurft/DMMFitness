import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Header from './components/Header';
import cities from 'cities.json';

// Pages
import Shop from './pages/Shop';
import MarkersMap from './pages/markers';
import About from './pages/About'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/shop' element={<Shop />} />

        <Route path='/locations' element={
      <MarkersMap />
   } />

        <Route path='/aboutus' element={<About />} />

      </Routes>

    </BrowserRouter>
   
         
    
   </>
  );
}

export default App;

