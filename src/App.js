// src/App.js

import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Change to HashRouter
import './App.css';
import Header from './Header'; // Navbar
import Home from './Home'; // Hero section
import About from './About'; // About Me page
import '@fortawesome/fontawesome-free/css/all.min.css';
import Projects from './Projects';
import ContactMe from './ContactMe';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/projects" element={<Projects />} /> 
          <Route path="/contact" element={<ContactMe />} /> 

        </Routes>
      </div>
    </Router>
  );
}

export default App;
