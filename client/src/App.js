import React, { useState, useEffect } from 'react';
import { Container} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';

const App = () => {

  return (
    <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/Auth' exact element={<Auth />} />
      </Routes>
    </Container></BrowserRouter>
  );
};

export default App;
