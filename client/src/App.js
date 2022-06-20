import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Header from './components/Header';


// Pages
import Shop from './pages/Shop';
import MarkersMap from './pages/Map';
import About from './pages/About'
import Home  from './pages/Classes/BookClass.js'
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
     <Route path='/classes' element={
      <Home />
   } />

        <Route path='/aboutus' element={<About />} />

      </Routes>

    </BrowserRouter>
   
         
    
   </>
  );
}

export default App;

