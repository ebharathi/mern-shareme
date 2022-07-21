import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { useState,useEffect } from 'react';
//components
import Home from './HomePage/Home';
import About from './About';
const App = () => {
     
  return (
      <Router>
            <Routes>
                  <Route path="/home" element={<Home/>}  />
                  <Route path="/about" element={<About />} />
            </Routes>
      </Router>
  )
}

export default App