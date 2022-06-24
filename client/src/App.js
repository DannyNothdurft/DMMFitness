import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Header from './components/Header';



// Pages
import Shop from './pages/Shop';
import MarkersMap from './pages/map/Map';
import About from './pages/About'

import Home from "./pages/classes/home/Home";
import Hotel from "./pages/classes/hotel/Hotel";
import List from "./pages/classes/list/List";
import Login from "./pages/classes/login/Login";
import Register from './components/Register'
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
 
        <Route path="/classes" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/aboutus' element={<About />} />
        <Route path='/' exact element={<Register />}/>
      </Routes>

    </BrowserRouter>
   
         
    
   </>
  );
}

export default App;

