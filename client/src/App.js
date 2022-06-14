import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

// Components
import Navbar from './components/Navbar';
import Header from './components/Header';

// Pages
import Shop from './pages/Shop';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

