import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

// Components
import Navbar from './components/Navbar';
import Header from './components/Header';
import { ChakraProvider, theme } from '@chakra-ui/react'
// Pages
import Shop from './pages/Shop';
import Map from './pages/Map'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/findStudio' element={<ChakraProvider theme={theme}>
      <Map />
    </ChakraProvider>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

